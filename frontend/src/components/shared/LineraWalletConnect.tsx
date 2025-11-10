import React, { useState, useEffect } from "react";
import {
  Wallet,
  Loader2,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Shield,
} from "lucide-react";
import { toast } from "sonner";
import "./LineraWalletConnect.css";

export default function LineraWalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletData, setWalletData] = useState<{
    chainId: string;
    wallet: any;
    client: any;
  } | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [connectionTime, setConnectionTime] = useState(0);
  const [timeoutWarning, setTimeoutWarning] = useState(false);
  const [isCrossOriginIsolated, setIsCrossOriginIsolated] = useState<
    boolean | null
  >(null);

  // Check cross-origin isolation on mount
  useEffect(() => {
    const checkIsolation = () => {
      if (typeof window !== "undefined") {
        const isolated = (window as any).crossOriginIsolated === true;
        setIsCrossOriginIsolated(isolated);

        if (!isolated) {
          console.warn("❌ Cross-Origin Isolation is NOT enabled");
          console.warn("SharedArrayBuffer will not be available");
          console.warn("Add COOP and COEP headers to your Next.js config");
        } else {
          console.log("✅ Cross-Origin Isolation is enabled");
        }
      }
    };

    checkIsolation();
  }, []);

  // Timer for connection duration
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnecting) {
      interval = setInterval(() => {
        setConnectionTime((prev) => {
          const newTime = prev + 1;
          if (newTime === 60 && !timeoutWarning) {
            setTimeoutWarning(true);
            toast.warning("Taking longer than expected", {
              description:
                "The connection is still in progress. Please wait or try refreshing.",
            });
          }
          if (newTime === 90) {
            toast.error("Connection timeout likely", {
              description: "Consider refreshing the page and trying again.",
            });
          }
          return newTime;
        });
      }, 1000);
    } else {
      setConnectionTime(0);
      setTimeoutWarning(false);
    }
    return () => clearInterval(interval);
  }, [isConnecting, timeoutWarning]);

  const connectWallet = async () => {
    // Check cross-origin isolation first
    if (isCrossOriginIsolated === false) {
      toast.error("Cross-Origin Isolation Required", {
        description:
          "Please add COOP and COEP headers to next.config.js and restart your dev server.",
      });
      return;
    }

    setIsConnecting(true);
    setProgress(0);
    setConnectionTime(0);

    toast.info("Starting connection", {
      description: "This usually takes 30-60 seconds. Please be patient...",
    });

    try {
      // Step 1: Import and initialize Linera (20%)
      setCurrentStep("Loading Linera client...");
      setProgress(10);
      toast.loading("Loading Linera client...");

      let linera;
      try {
        linera = await import("@linera/client");
        setProgress(15);
        await linera.default();
        setProgress(20);
        toast.loading("WebAssembly initialized ✓");
      } catch (error) {
        console.error("Step 1 error:", error);
        throw new Error(
          "Failed to load Linera client. Make sure @linera/client is installed."
        );
      }

      // Step 2: Connect to faucet (40%)
      setCurrentStep("Connecting to testnet...");
      setProgress(25);
      toast.loading("Connecting to Conway testnet...");

      let faucet;
      try {
        faucet = await new (linera as any).Faucet(
          "https://faucet.testnet-conway.linera.net"
        );
        setProgress(40);
        toast.loading("Connected to testnet ✓");
      } catch (error) {
        console.error("Step 2 error:", error);
        throw new Error(
          "Failed to connect to testnet. Please check your internet connection."
        );
      }

      // Step 3: Create wallet (60%)
      setCurrentStep("Creating your wallet...");
      setProgress(45);
      toast.loading("Generating wallet keys...");

      let wallet;
      try {
        wallet = await faucet.createWallet();
        setProgress(60);
        toast.loading("Wallet created ✓");
      } catch (error) {
        console.error("Step 3 error:", error);
        throw new Error("Failed to create wallet. Please try again.");
      }

      // Step 4: Initialize client (75%) - EXTENDED TIMEOUT
      setCurrentStep("Initializing client...");
      setProgress(65);
      toast.loading("Setting up client (this step can take a while)...");

      let client;
      try {
        // Increased timeout to 60 seconds for client initialization
        const clientPromise = new (linera as any).Client(wallet);
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Client initialization timeout after 60s")),
            60000
          )
        );

        client = await Promise.race([clientPromise, timeoutPromise]);
        setProgress(75);
        toast.loading("Client initialized ✓");
      } catch (error) {
        console.error("Step 4 error (client init):", error);

        // Check if it's a SharedArrayBuffer error
        if (
          error instanceof Error &&
          error.message.includes("SharedArrayBuffer")
        ) {
          throw new Error(
            "SharedArrayBuffer not available. Ensure cross-origin isolation is enabled."
          );
        }

        throw new Error(
          `Failed to initialize client: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }

      // Step 5: Claim chain from faucet (100%)
      setCurrentStep("Claiming chain from faucet...");
      setProgress(80);
      toast.loading("Requesting chain from faucet (this may take a moment)...");

      let chainId;
      try {
        // Increased timeout to 90 seconds for chain claim
        const claimPromise = faucet.claimChain(client);
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Chain claim timeout after 90s")),
            90000
          )
        );

        chainId = await Promise.race([claimPromise, timeoutPromise]);
        setProgress(100);
      } catch (error) {
        console.error("Step 5 error (claim chain):", error);
        throw new Error(
          `Failed to claim chain: ${
            error instanceof Error
              ? error.message
              : "The faucet might be unavailable or rate-limited."
          }`
        );
      }

      // Success!
      setWalletData({ chainId, wallet, client });
      setIsConnected(true);
      setCurrentStep("Connected!");

      toast.success("Wallet connected successfully!", {
        description: `Chain ID: ${chainId.slice(0, 8)}...${chainId.slice(
          -6
        )} • Time: ${connectionTime}s`,
      });
    } catch (error) {
      console.error("Connection error:", error);
      toast.error("Connection failed", {
        description:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
      setIsConnected(false);
      setWalletData(null);
      setProgress(0);
      setCurrentStep("");
    } finally {
      setIsConnecting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Now using Sonner toast, so we removed the custom toast container */}

      <div className="text-center max-w-2xl">
        {/* Cross-Origin Isolation Status */}
        {isCrossOriginIsolated !== null && (
          <div
            className={`mb-4 p-3 rounded-lg border flex items-center gap-3 text-sm ${
              isCrossOriginIsolated
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            <Shield className="w-5 h-5 shrink-0" />
            <div className="text-left flex-1">
              <p className="font-semibold">
                {isCrossOriginIsolated
                  ? "✓ Cross-Origin Isolated"
                  : "✗ Cross-Origin Isolation Required"}
              </p>
              {!isCrossOriginIsolated && (
                <p className="text-xs mt-1 opacity-80">
                  Add COOP and COEP headers to next.config.js, then restart your
                  server
                </p>
              )}
            </div>
          </div>
        )}

        <button
          onClick={connectWallet}
          disabled={
            isConnecting || isConnected || isCrossOriginIsolated === false
          }
          className="px-4 py-2 text-sm rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
        >
          {isConnecting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Connecting...</span>
            </>
          ) : isConnected ? (
            <>
              <Wallet className="w-4 h-4" />
              <span>Connected</span>
            </>
          ) : (
            <>
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </>
          )}
        </button>

        {/* Progress indicator */}
        {isConnecting && (
          <div className="mt-4 max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
              <div
                className="connect-progress"
                style={
                  { "--progress-width": `${progress}%` } as React.CSSProperties
                }
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>{currentStep}</span>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>{formatTime(connectionTime)}</span>
              </div>
            </div>

            <div className="text-xs text-purple-600 font-medium mt-1">
              {progress}% complete
            </div>

            {connectionTime > 60 && (
              <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 text-left">
                  Connection is taking longer than usual. This can happen due to
                  network congestion or faucet load.
                </p>
              </div>
            )}
          </div>
        )}

        {isConnected && walletData && (
          <div className="mt-6 p-4 bg-white rounded-lg border border-purple-100 max-w-md mx-auto">
            <p className="text-sm text-gray-600 mb-2">Chain ID:</p>
            <code className="text-xs text-purple-600 break-all">
              {walletData.chainId}
            </code>
            <p className="text-xs text-gray-500 mt-2">
              Connected in {formatTime(connectionTime)}
            </p>
          </div>
        )}

        {/* Configuration Help */}
        {isCrossOriginIsolated === false && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-left text-xs">
            <p className="font-semibold text-gray-800 mb-2">
              📝 Configuration Needed:
            </p>
            <p className="text-gray-600 mb-2">
              Add this to your{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                next.config.js
              </code>
              :
            </p>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
              {`async headers() {
  return [{
    source: '/:path*',
    headers: [
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin',
      },
      {
        key: 'Cross-Origin-Embedder-Policy',
        value: 'require-corp',
      },
    ],
  }];
}`}
            </pre>
            <p className="text-gray-600 mt-2">
              Then restart your dev server with{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                npm run dev
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
