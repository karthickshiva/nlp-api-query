import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Loader2 } from 'lucide-react';

interface ResponseDisplayProps {
  response: string;
  isLoading: boolean;
}

export function ResponseDisplay({ response, isLoading }: ResponseDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600 dark:text-purple-400" />
      </div>
    );
  }

  if (!response) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400 dark:text-slate-500">
        Your response will appear here
      </div>
    );
  }

  return (
    <div className="prose prose-slate dark:prose-invert prose-sm sm:prose lg:prose-lg max-w-none">
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}