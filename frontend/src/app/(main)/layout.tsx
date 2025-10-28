"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import AppSidebar from "@/components/shared/appsidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

const PlatformHeader = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 ml-10 z-30 bg-white border-b border-purple-100 transition-all duration-300">
      <div className="flex h-16 items-center justify-between px-4">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/markets"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-600"
              >
                Markets
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-600"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-600"
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition-all">
            Connect Wallet
          </button>
          <button className="px-4 py-2 text-sm bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}

const PlatformContent = ({ children }: { children: React.ReactNode }) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      <div className="flex">
        <AppSidebar />

        <div
          className={`
            flex-1 flex flex-col overflow-hidden
            transition-all duration-300 ease-in-out
            ${isCollapsed ? "ml-[4.3rem]" : "ml-64"}
          `}
        >
          {/* Header */}
          <PlatformHeader />

          {/* Main content */}
          <main className="flex-1 overflow-auto transition-colors duration-300">
            <div
              className={`
                min-h-screen w-full px-4 py-6 
                transition-all duration-300 ease-in-out 
                sm:px-6 lg:px-8
                ${
                  isCollapsed
                    ? "max-w-[calc(100vw-4.3rem)]"
                    : "max-w-[calc(100vw-16rem)]"
                }
              `}
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const PlatformLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SidebarProvider>
      <PlatformContent>{children}</PlatformContent>
    </SidebarProvider>
  );
}

export default PlatformLayout;