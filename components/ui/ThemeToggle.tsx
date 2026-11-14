'use client';

import React, { useEffect, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('reclaim_theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('reclaim_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <button
        className="icon-button"
        type="button"
        aria-label="Toggle color theme"
      >
        ☾
      </button>
    );
  }

  return (
    <button
      className="icon-button"
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <span className="text-sm select-none">☾</span>
      ) : (
        <HugeiconsIcon icon={Sun01Icon} size={15} />
      )}
    </button>
  );
};
