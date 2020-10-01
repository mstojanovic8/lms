import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getToken, resetLoginError } from '../redux/actions/global';
import { getTokenIfExists } from '../utils';
import * as selectors from '../redux/selectors';

const Login = ({ history }) => {
  // initial state for email and pw just for dev
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('agbC8yK6Sddz57p');
  const dispatch = useDispatch();
  const token = getTokenIfExists();

  const resetErrorMessage = () => {
    dispatch(resetLoginError());
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(getToken({ email, password })).then(() => {
      history.replace('/');
    });
  };

  const error = useSelector((state) => selectors.getError(state));

  if (token) {
    console.log('========== IMA TOKEN =========== ');

    return <Redirect to='/' />;
  }

  const renderError = () => {
    return (
      error !== '' && (
        <div>
          <label style={{ color: 'red' }}>{error}</label>
        </div>
      )
    );
  };

  return (
    <div className='w-full max-w-xs m-auto'>
      <h2>Login</h2>
      <form
        className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'
        onSubmit={handleLoginSubmit}
      >
        {renderError()}
        <div className='mb-4'>
          <label
            className='block text-purple-500 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            placeholder='example@example.com'
            name='email'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              resetErrorMessage;
            }}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-purple-500 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password:{' '}
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            type='password'
            name='password'
            placeholder='******************'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default memo(Login);
