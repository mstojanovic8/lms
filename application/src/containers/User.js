import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from '../context';
import { getUsersInfo } from '../redux/actions/users';
import * as selectors from '../redux/selectors';

const User = ({ history }) => {
  const goHome = () => {
    history.push('/');
  };

  const userInfo = useSelector((state) => {
    return selectors.getCurrentUser(state);
  });
  const isUserInitialized = useSelector((state) => {
    return selectors.getIsUsersInitialized(state);
  });

  console.log('======= userInfo ========= ', userInfo);
  return (
    isUserInitialized && (
      <div>
        <h2>User Info</h2>
        <p>name: {userInfo.name}</p>
        <p>email: {userInfo.email}</p>
        <p>role: {userInfo.role}</p>
        <p>state: {userInfo.state}</p>
        <button onClick={goHome}>Go Home</button>
      </div>
    )
  );
};

export default memo(withNavigation(User));
