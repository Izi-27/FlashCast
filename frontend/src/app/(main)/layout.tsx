"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import AppSidebar from "@/components/shared/appsidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

const PlatformHeader = () => {
  const router = useRouter();
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  return (
    <header className="sticky top-0 ml-10 z-30 bg-white border-b border-purple-100 transition-all duration-300">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpenMobile(true)}
            className="md:hidden p-2 -ml-2 mr-2 hover:bg-purple-50 rounded-lg"
            aria-label="Open menu"
            title="Open menu"
          >
            <Menu className="w-6 h-6 text-purple-600" />
          </button>

          {/* Desktop Navigation */}
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
        </div>

        {/* Mobile Menu Overlay */}
        {openMobile && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpenMobile(false)}
          >
            <div
              className="absolute right-0 top-0 h-screen w-64 bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/markets"
                      className="block text-base font-medium text-zinc-600 transition-colors hover:text-purple-600"
                      onClick={() => setOpenMobile(false)}
                    >
                      Markets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="block text-base font-medium text-zinc-600 transition-colors hover:text-purple-600"
                      onClick={() => setOpenMobile(false)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="block text-base font-medium text-zinc-600 transition-colors hover:text-purple-600"
                      onClick={() => setOpenMobile(false)}
                    >
                      Docs
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="px-4 py-2 text-sm rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition-all"
          >
            Connect Wallet
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
};

const PlatformContent = ({ children }: { children: React.ReactNode }) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      <div className="relative flex">
        <AppSidebar />

        <div
          className={`
            flex-1 flex flex-col overflow-hidden
            transition-all duration-300 ease-in-out
            ${isCollapsed ? "md:ml-8 ml-8" : "md:ml-56"}
          `}
        >
          {/* Header */}
          <PlatformHeader />

          {/* Main content */}
          <main className="flex-1 overflow-x-hidden transition-colors duration-300">
            <div
              className={`
                min-h-screen w-full pl-4 py-6 
                transition-all duration-300 ease-in-out 
                sm:pl-6 lg:pl-8
                ${
                  isCollapsed
                    ? "md:max-w-[calc(100vw-4.3rem)]"
                    : "md:max-w-[calc(100vw-16rem)]"
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
};

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <PlatformContent>{children}</PlatformContent>
    </SidebarProvider>
  );
};

export default PlatformLayout;
