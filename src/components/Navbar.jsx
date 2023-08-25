import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { UserAuth } from '../context/AuthContext';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
      handleNav(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='rounded-div h-20 font-bold flex justify-between items-center'>
      <Link to='/'>
        <h1 className='text-2xl'>Cryptobase</h1>
      </Link>
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>

      {user?.email ? (
        <div className='hidden md:flex items-center gap-4'>
          <Link to='/account' className='font-bold cursor-pointer hover:text-accent'>
            Account
          </Link>
          <button
            onClick={handleSignOut}
            className='px-6 py-2 border rounded-2xl shadow-lg hover:shadow-2xl'
          >
            Sign Out
          </button>
        </div>
      ) : (
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
      )}

      <div className='md:hidden cursor-pointer flex items-center'>
        <ThemeToggle />
        <div onClick={handleNav} className='cursor-pointer'>
          <AiOutlineMenu size={24} />
        </div>
      </div>

      {nav && (
        <div className='md:hidden fixed left-0 top-0 w-full h-full bg-[#00000080] transition-all flex z-10'>
          <div
            className={
              'md:hidden w-[70%] absolute right-0 top-0 h-[100%] flex flex-col items-center justify-between bg-primary z-10000'
            }
          >
            <ul className='p-4 w-full flex flex-col'>
              <li className='self-end'>
                <div onClick={handleNav} className=' py-1 cursor-pointer'>
                  <AiOutlineClose size={24} />
                </div>
              </li>
              <li className='py-6 border-b'>
                <Link onClick={handleNav} to='/'>
                  Home
                </Link>
              </li>
              <li className='py-6 border-b'>
                <Link onClick={handleNav} to='/account'>
                  Account
                </Link>
              </li>
            </ul>

            {user?.email ? (
              <div className='p-4 w-full'>
                <button
                  onClick={handleSignOut}
                  className='w-full px-6 py-2 border rounded-2xl shadow-lg hover:shadow-2xl'
                >
                  Sign Out
                </button>
              </div>
            ) : (
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
                  <button
                    onClick={handleNav}
                    className='w-full my-2 p-3 bg-button text-btnTxt border border-secondary rounded-2xl shadow-xl'
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
