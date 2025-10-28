import React, { useEffect, useState } from 'react';
import { Home, Compass, MessageCircle, User, Search, Sun, Moon } from 'lucide-react';

const tabs = [
  { name: 'Home', icon: Home },
  { name: 'Explore', icon: Compass },
  { name: 'Messages', icon: MessageCircle },
  { name: 'Profile', icon: User },
];

export default function NavBar() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-fuchsia-500 to-cyan-400 shadow ring-1 ring-white/20" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Aether</span>
          </div>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 px-1 py-1">
            {tabs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                aria-label={name}
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-3 py-1.5">
              <Search className="h-4 w-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search creators"
                className="w-40 bg-transparent text-sm outline-none placeholder:text-neutral-400 text-neutral-900 dark:text-neutral-100"
              />
            </div>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
