"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  FileText,
  Briefcase,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/components/providers/theme-provider";

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
}

const AppSidebar: React.FC = () => {
  const pathname = usePathname();
  const { state, toggleSidebar, isMobile, openMobile } = useSidebar();
  const { theme } = useTheme();
  const isCollapsed = state === "collapsed";

  const mainNavItems: SidebarItem[] = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "Markets", icon: TrendingUp, href: "/markets" },
    { title: "Portfolio", icon: Briefcase, href: "/portfolio" },
    { title: "Predictions", icon: FileText, href: "/predictions" },
    { title: "Wallet", icon: Wallet, href: "/wallet" },
  ];

  const bottomNavItems: SidebarItem[] = [
    { title: "Settings", icon: Settings, href: "/settings" },
    { title: "Help", icon: HelpCircle, href: "/help" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && openMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => toggleSidebar()}
        />
      )}
      <aside
        data-sidebar="sidebar"
        className={`
          fixed left-0 top-0 h-screen border-r z-50
          bg-white transition-all duration-300 ease-in-out flex flex-col
          border-purple-500/20 shadow-xl
          ${isMobile && !openMobile ? "-translate-x-full" : "translate-x-0"}
          ${isMobile ? "w-64" : isCollapsed ? "w-[4.3rem]" : "w-64"}
        `}
      >
        {/* Logo and Brand */}
        <div className="flex-none p-4">
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`
            relative h-8 w-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-500
            flex items-center justify-center text-white font-bold text-xl
            ${isCollapsed && !isMobile ? "mx-auto" : ""}
          `}
            >
              F
            </div>
            {(!isCollapsed || isMobile) && (
              <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                FLASHCAST
              </span>
            )}
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-6 scrollbar-custom">
          <nav className="space-y-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  group flex items-center gap-3 rounded-lg p-2 transition-all duration-200
                  ${isCollapsed && !isMobile ? "justify-center" : "px-4"}
                  ${
                    isActive
                      ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg bold uppercase tracking-wider"
                      : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-500"
                  }
                `}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {(!isCollapsed || isMobile) && (
                    <span className="text-sm font-medium">{item.title}</span>
                  )}
                  {item.badge && (!isCollapsed || isMobile) && (
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-orange-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex-none px-3 pb-4">
          {/* Bottom Navigation */}
          <nav className="space-y-2 border-t border-orange-500/10 pt-4">
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  group flex items-center gap-3 rounded-lg p-2 transition-all duration-200
                  ${isCollapsed && !isMobile ? "justify-center" : "px-4"}
                  ${
                    isActive
                      ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                      : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-500"
                  }
                `}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {(!isCollapsed || isMobile) && (
                    <span className="text-sm font-medium">{item.title}</span>
                  )}
                </Link>
              );
            })}

            {/* Collapse Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSidebar();
              }}
              className={`
              w-full flex items-center gap-3 rounded-lg p-2 transition-all duration-200 mt-4
              ${isCollapsed && !isMobile ? "justify-center" : "px-4"}
              text-gray-300 hover:bg-purple-500/10 hover:text-purple-500
            `}
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <>
                  <ChevronLeft className="h-5 w-5" />
                  <span className="text-sm font-medium">Collapse</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
