import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='rounded-div h-20 font-bold flex justify-between items-center'>
      <Link to='/'>
        <h1 className='text-2xl'>Cryptobase</h1>
      </Link>
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>
      <div className='hidden md:block'>
        <Link to='/signin' className='p-4 hover:text-accent'>
          Sign In
        </Link>
        <Link
          to='/signup'
          className='px-5 py-2 ml-2 bg-button text-btnTxt rounded-2xl shadow-lg hover:shadow-2xl'
        >
          Sign Up
        </Link>
      </div>
      <div className='md:hidden cursor-pointer z-10 flex items-center'>
        <ThemeToggle />
        <div onClick={handleNav}>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-20 h-[90%]  flex flex-col items-center justify-between w-full bg-primary easy-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%]  flex flex-col items-center justify-between bg-primary easy-in duration-300'
        }
      >
        <ul className='p-4 w-full'>
          <li className='py-6 border-b'>
            <Link to='/'>Home</Link>
          </li>
          <li className='py-6 border-b'>
            <Link to='/aacount'>Account</Link>
          </li>
        </ul>
        <div className='p-4 flex flex-col w-full'>
          <Link to='/signin'>
            <button
              onClick={handleNav}
              className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'
            >
              Sign In
            </button>
          </Link>
          <Link to='/signup'>
            <button className='w-full my-2 p-3 bg-button text-btnTxt border border-secondary rounded-2xl shadow-xl'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;