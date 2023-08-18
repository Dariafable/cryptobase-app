import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';

const Signin = () => {
  return (
    <div className='px-4 py-20 mx-auto max-w-[400px] min-h-[600px]'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      <form>
        <div className='py-4'>
          <lable>Email</lable>
          <div className='w-full relative rounded-2xl shadow-xl'>
            <input
              className='p-2 w-full bg-primary border border-input rounded-2xl'
              type='email'
              placeholder='Enter your email'
            />
            <AiOutlineMail className='absolute top-3 right-2 text-gray-400' />
          </div>
        </div>

        <div className='py-4'>
          <lable>Password</lable>
          <div className='w-full relative rounded-2xl shadow-xl'>
            <input
              className='p-2 w-full bg-primary border border-input rounded-2xl'
              type='email'
              placeholder='Enter your password'
            />
            <AiFillLock className='absolute top-3 right-2 text-gray-400' />
          </div>
        </div>
        <button className='my-2 p-3 w-full bg-button text-btnTxt font-bold rounded-2xl shadow-xl'>
          Sign In
        </button>
      </form>
      <p className='py-4'>
        Don't have an account?{' '}
        <Link to='/signup' className='text-accent'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
