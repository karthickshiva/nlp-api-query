import React from 'react';
import { BarChart, PieChart, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Total Queries', value: '12,543', change: '+12.3%', icon: BarChart },
  { label: 'Success Rate', value: '98.7%', change: '+0.5%', icon: PieChart },
  { label: 'Avg. Response Time', value: '245ms', change: '-18.2%', icon: TrendingUp }
];

export function Reports() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm ${
                  stat.change.startsWith('+') 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change} vs last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Monthly Usage</h2>
        <div className="h-64 flex items-center justify-center text-slate-400">
          Chart placeholder - Add your preferred charting library
        </div>
      </div>
    </div>
  );
}