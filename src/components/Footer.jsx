import React from 'react';
import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaReddit,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Footer = () => {
  const { user } = UserAuth();
  return (
    <div className='mt-8 pt-8 rounded-div text-primary'>
      <div className='grid md:grid-cols-2 md:items-center'>
        <div className='w-full md:max-w-[300px] flex justify-evenly uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='py-2 text-sm  cursor-pointer'>Help Center</li>
              <li className='py-2 text-sm cursor-pointer'>Contact Us</li>
              <li className='py-2 text-sm cursor-pointer'>API Status</li>
              <li className='py-2 text-sm cursor-pointer'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='py-2 text-sm cursor-pointer'>About Us</li>
              <li className='py-2 text-sm cursor-pointer'>Careers</li>
              <li className='py-2 text-sm cursor-pointer'>Invest</li>
              <li className='py-2 text-sm cursor-pointer'>Legal</li>
            </ul>
          </div>
        </div>

        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full py-4 md:max-w-[300px] '>
              <div className='py-4 md:py-0 md:pb-0 mt-[-1rem] flex justify-center md:justify-end'>
                <ThemeToggle />
              </div>
              <p className={user?.email ? 'hidden' : 'text-center md:text-right'}>
                Sign up for crypto news
              </p>
              <div className='py-4'>
                <form>
                  {/*   <input
                    className='w-full md:w-auto mr-2 p-2 bg-primary border border-input rounded-2xl shadow-xl'
                    placeholder='Enter your email'
                  /> */}
                  <Link to='/signup'>
                    <button
                      className={
                        user?.email
                          ? 'hidden'
                          : 'w-full md:w-auto my-2 p-2 px-4 bg-button rounded-2xl shadow-xl hover:shadow-2xl text-btnTxt font-bold'
                      }
                    >
                      Sign Up
                    </button>
                  </Link>
                </form>
              </div>
              <div className='py-4 flex justify-between text-accent'>
                <a href='https://www.instagram.com/coingecko/' target='_blank' rel='noreferrer'>
                  <FaInstagram />
                </a>
                <a href='https://t.me/coingeckonews' target='_blank' rel='noreferrer'>
                  <FaTelegram />
                </a>
                <a href='https://www.tiktok.com/@coingeckotv' target='_blank' rel='noreferrer'>
                  <FaTiktok />
                </a>
                <a href='https://www.reddit.com/r/coingecko/' target='_blank' rel='noreferrer'>
                  <FaReddit />
                </a>
                <a href='https://twitter.com/coingecko' target='_blank' rel='noreferrer'>
                  <FaTwitter />
                </a>
                <a href='https://github.com/coingecko' target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
                <a
                  href='https://www.youtube.com/channel/UC-OTgwOAI7KmP0eDAtqN3Ow'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='py-4 text-center'>Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
