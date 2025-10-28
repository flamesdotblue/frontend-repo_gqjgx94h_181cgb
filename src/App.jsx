import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Feed from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <NavBar />
      <main>
        <Hero />
        <Feed />
      </main>
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Aether — Premium creator platform.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200">Privacy</a>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200">Terms</a>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
