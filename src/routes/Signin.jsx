import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='px-4 py-20 mx-auto max-w-[400px] min-h-[600px]'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className='py-4'>
          <lable>Email</lable>
          <div className='w-full relative rounded-2xl shadow-xl'>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 w-full bg-primary border border-input rounded-2xl'
              type='password'
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
