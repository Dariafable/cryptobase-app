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

const Footer = () => {
  return (
    <div className='mt-8 pt-8 rounded-div text-primary'>
      <div className='grid md:grid-cols-2 md:items-center'>
        <div className='w-full md:max-w-[300px] flex justify-evenly uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='py-2 text-sm'>Help Center</li>
              <li className='py-2 text-sm'>Contact Us</li>
              <li className='py-2 text-sm'>API Status</li>
              <li className='py-2 text-sm'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='py-2 text-sm'>About Us</li>
              <li className='py-2 text-sm'>Careers</li>
              <li className='py-2 text-sm'>Invest</li>
              <li className='py-2 text-sm'>Legal</li>
            </ul>
          </div>
        </div>

        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full py-4 md:max-w-[300px] relative'>
              <div className='py-4 md:py-0 md:pb-0 mt-[-1rem] flex justify-center md:justify-end'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Sign up for crypto news</p>
              <div className='py-4'>
                <form>
                  <input
                    className='w-full md:w-auto mr-2 p-2 bg-primary border border-input rounded-2xl shadow-xl'
                    placeholder='Enter your email'
                  />
                  <button className='w-full md:w-auto my-2 p-2 px-4 bg-button rounded-2xl shadow-xl hover:shadow-2xl text-btnTxt font-bold'>
                    Sign up
                  </button>
                </form>
              </div>
              <div className='py-4 flex justify-between text-accent'>
                <a href='https://www.instagram.com/coingecko/' target='_blank'>
                  <FaInstagram />
                </a>
                <a href='https://t.me/coingeckonews' target='_blank'>
                  <FaTelegram />
                </a>
                <a href='https://www.tiktok.com/@coingeckotv' target='_blank'>
                  <FaTiktok />
                </a>
                <a href='https://www.reddit.com/r/coingecko/' target='_blank'>
                  <FaReddit />
                </a>
                <a href='https://twitter.com/coingecko' target='_blank'>
                  <FaTwitter />
                </a>
                <a href='https://github.com/coingecko' target='_blank'>
                  <FaGithub />
                </a>
                <a href='https://www.youtube.com/channel/UC-OTgwOAI7KmP0eDAtqN3Ow' target='_blank'>
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
