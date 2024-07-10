import { useState, useEffect } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 items-center bg-orange-200 dark:bg-zinc-600 rounded-3xl focus:outline-none transition-colors duration-300"
      style={{ transitionProperty: 'background-color, color', transitionTimingFunction: 'ease-in-out' }}
    >
      {theme === 'light' ? <IconSun stroke={2}/> : <IconMoon stroke={2}/>}
    </button>
  );
};

export default ThemeToggleButton;
