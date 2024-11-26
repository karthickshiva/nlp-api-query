import React, { useState } from 'react';
import { QueryInput } from '../components/QueryInput';
import { ResponseDisplay } from '../components/ResponseDisplay';

export function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const mockResponse = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Response to: "${query}"\n\n- This is a mock response\n- Replace with actual API integration\n- The response supports markdown formatting`);
        }, 1000);
      });
      setResponse(mockResponse as string);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg dark:shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
        <QueryInput
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg dark:shadow-2xl min-h-[200px] border border-slate-200/50 dark:border-slate-700/50">
        <ResponseDisplay response={response} isLoading={isLoading} />
      </div>
    </div>
  );
}