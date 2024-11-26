import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileJson, BarChart2, User, LogOut } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

function NavItem({ icon, label, to }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-purple-100 text-purple-900 dark:bg-purple-900/20 dark:text-purple-100'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`
      }
    >
      {icon}
      <span className="font-medium">{label}</span>
    </NavLink>
  );
}

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 z-20 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-4 shadow-lg dark:shadow-2xl transition-transform duration-200 ease-in-out z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-0`}
      >
        <div className="flex flex-col h-full">
          <div className="space-y-1">
            <NavItem icon={<Home className="w-5 h-5" />} label="Home" to="/" />
            <NavItem icon={<FileJson className="w-5 h-5" />} label="API Specifications" to="/api-specs" />
            <NavItem icon={<BarChart2 className="w-5 h-5" />} label="Reports" to="/reports" />
            <NavItem icon={<User className="w-5 h-5" />} label="Profile" to="/profile" />
          </div>
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors w-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}