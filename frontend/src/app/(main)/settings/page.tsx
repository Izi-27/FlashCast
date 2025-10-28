"use client";

import { motion } from "framer-motion";
import {
  User,
  Lock,
  Bell,
  Wallet,
  Eye,
  Moon,
  Sun,
  Languages,
  Shield,
  ToggleLeft,
  Settings,
} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50/30 via-white to-pink-50/30">
      <div className="space-y-8 p-8">
        {/* Page Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-purple-600 to-pink-500 rounded-xl">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Settings
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Manage your account preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5" /> Profile
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="trader123"
                      placeholder="Enter username"
                      aria-label="Username"
                      className="w-full p-3 rounded-lg bg-white/5 border border-purple-600/30 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="trader@example.com"
                      placeholder="Enter email"
                      aria-label="Email"
                      className="w-full p-3 rounded-lg bg-white/5 border border-purple-600/30 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Security Settings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5" /> Security
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    aria-label="Current Password"
                    className="w-full p-3 rounded-lg bg-white/5 border border-purple-600/30 focus:border-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      aria-label="New Password"
                      className="w-full p-3 rounded-lg bg-white/5 border border-purple-600/30 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      aria-label="Confirm Password"
                      className="w-full p-3 rounded-lg bg-white/5 border border-purple-600/30 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Quick Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Preferences */}
            <div className="p-6 rounded-xl bg-white/5 border border-purple-100 hover:border-purple-300 hover:shadow-lg">
              <h2 className="text-xl font-bold mb-6">Preferences</h2>
              <div className="space-y-4">
                {[
                  { icon: Bell, label: "Notifications", enabled: true },
                  { icon: Eye, label: "Hide Balance", enabled: false },
                  { icon: Moon, label: "Dark Mode", enabled: true },
                  { icon: Shield, label: "2FA", enabled: true },
                ].map((setting) => (
                  <div
                    key={setting.label}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <setting.icon className="w-5 h-5" />
                      <span>{setting.label}</span>
                    </div>
                    <button
                      aria-label={`Toggle ${setting.label}`}
                      title={`Toggle ${setting.label}`}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        setting.enabled ? "bg-purple-500" : "bg-zinc-700"
                      }`}
                    >
                      <span className="sr-only">
                        {setting.enabled ? "Enabled" : "Disabled"}
                      </span>
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          setting.enabled ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 rounded-xl bg-white/5 border border-purple-100 hover:border-purple-300 hover:shadow-lg">
              <h2 className="text-xl font-bold mb-6">Actions</h2>
              <div className="space-y-3">
                <button className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left">
                  Export Data
                </button>
                <button className="w-full p-3 rounded-lg bg-rose-500/20 text-rose-500 hover:bg-rose-500/30 transition-colors text-left">
                  Delete Account
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
