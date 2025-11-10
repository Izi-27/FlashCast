"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Loader2, Wallet } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

export default function DynamicWallet() {
  const {
    handleLogOut,
    handleConnect,
    isConnecting,
    isAuthenticated,
    primaryWallet,
    error,
  } = useDynamicContext();

  useEffect(() => {
    if (error) {
      toast.error("Wallet Error", {
        description: error.message || "Failed to connect wallet",
      });
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated && primaryWallet) {
      toast.success("Wallet Connected", {
        description: `Connected to ${primaryWallet.connector.name}`,
      });
    }
  }, [isAuthenticated, primaryWallet]);

  return (
    <button
      onClick={isAuthenticated ? handleLogOut : handleConnect}
      disabled={isConnecting}
      className="px-4 py-2 text-sm rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
    >
      {isConnecting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Connecting...</span>
        </>
      ) : isAuthenticated ? (
        <>
          <Wallet className="w-4 h-4" />
          <span>Connected ({primaryWallet?.connector?.name})</span>
        </>
      ) : (
        <>
          <Wallet className="w-4 h-4" />
          <span>Connect Wallet</span>
        </>
      )}
    </button>
  );
}
