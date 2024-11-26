import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Brain, Github } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { ApiSpecs } from './pages/ApiSpecs';
import { Reports } from './pages/Reports';
import { Profile } from './pages/Profile';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 transition-colors duration-200">
        <div className="flex h-screen overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
          <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              {/* Header */}
              <header className="mb-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-8 h-8 text-purple-600 dark:text-purple-300" />
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-300">
                      NLP Query
                    </h1>
                  </div>
                  <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Ask anything and get structured responses powered by NLP
                </p>
              </header>

              {/* Main Content */}
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/api-specs" element={<ApiSpecs />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>

              {/* Footer */}
              <footer className="mt-12 text-center text-slate-500 dark:text-slate-400 text-sm">
                <p>Built with React + TypeScript + Tailwind CSS</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;