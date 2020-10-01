import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamInfo } from '../redux/actions/teams';

const Team = ({ history }) => {
  const goHome = () => {
    history.push('/');
  };
  return (
    <div>
      <div>Team</div>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default memo(Team);
