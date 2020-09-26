import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getToken, logout } from '../redux/actions/global';
import { getTokenIfExists } from '../utils';
import * as selectors from '../redux/selectors';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = getTokenIfExists();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    dispatch(getToken({ email, password }));
    history.replace('/');
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        {renderError()}
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default memo(Login);
