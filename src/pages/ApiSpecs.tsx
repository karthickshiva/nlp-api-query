import React from 'react';
import { Code2, Server, Webhook } from 'lucide-react';

const endpoints = [
  {
    name: 'Query Endpoint',
    path: '/api/v1/query',
    method: 'POST',
    description: 'Submit natural language queries for processing',
    icon: Code2
  },
  {
    name: 'Model Information',
    path: '/api/v1/models',
    method: 'GET',
    description: 'Get information about available language models',
    icon: Server
  },
  {
    name: 'Webhooks',
    path: '/api/v1/webhooks',
    method: 'POST',
    description: 'Configure webhooks for async processing',
    icon: Webhook
  }
];

export function ApiSpecs() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">API Specifications</h2>
        
        <div className="space-y-6">
          {endpoints.map((endpoint) => {
            const Icon = endpoint.icon;
            return (
              <div key={endpoint.path} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{endpoint.name}</h3>
                    <div className="mt-1 flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-purple-600 dark:text-purple-300">{endpoint.path}</code>
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{endpoint.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}