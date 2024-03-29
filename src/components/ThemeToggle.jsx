import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='p-2'>
      {theme === 'dark' ? (
        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='flex items-center cursor-pointer'
        >
          <HiSun className='md:mr-2 text-primary text-2xl' />
          <span className='hidden md:block'>Light Mode</span>
        </div>
      ) : (
        <div
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className='flex items-center cursor-pointer'
        >
          <HiMoon className='md:mr-2 text-primary text-2xl' />
          <span className='hidden md:block'>Dark Mode</span>
        </div>
      )}
    </div>
  );
};
export default ThemeToggle;
