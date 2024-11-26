import React from 'react';
import { User, Key, Bell, Shield } from 'lucide-react';

export function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
            <User className="w-10 h-10 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">John Doe</h2>
            <p className="text-slate-600 dark:text-slate-300">john.doe@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 dark:text-white">
              <Key className="w-5 h-5" />
              <h3 className="font-semibold">API Keys</h3>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
              <code className="text-sm text-purple-600 dark:text-purple-300">sk_live_...3a2b1c</code>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 dark:text-white">
              <Bell className="w-5 h-5" />
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600" checked />
                <span className="text-slate-600 dark:text-slate-300">Email notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600" />
                <span className="text-slate-600 dark:text-slate-300">Push notifications</span>
              </label>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-2 text-slate-900 dark:text-white mb-4">
            <Shield className="w-5 h-5" />
            <h3 className="font-semibold">Security Settings</h3>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Enable Two-Factor Auth
          </button>
        </div>
      </div>
    </div>
  );
}