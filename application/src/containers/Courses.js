import React, { useEffect, memo } from 'react';

const Courses = ({ history }) => {
  const goHome = () => {
    history.push('/');
  };
  return (
    <div>
      <div>Courses</div>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default memo(Courses);
