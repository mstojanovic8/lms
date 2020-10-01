import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/global';
import { getCourses } from '../redux/actions/courses';
import { getScopes } from '../redux/actions/scopes';
import { getUserInfo } from '../redux/actions/users';
import * as selectors from '../redux/selectors';

const Home = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getScopes());
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    history.push('/login');
  };

  const goToCourses = () => {
    history.push('/courses');
  };
  const goToUserInfo = () => {
    history.push('/me');
  };

  const coursesByType = useSelector((state) => {
    return selectors.getCoursesByType(state);
  });
  const scopesByName = useSelector((state) => {
    return selectors.getScopesByName(state);
  });

  console.log(scopesByName);

  return (
    <div>
      <div>
        <h1>Scope: {Object.keys(scopesByName)[0]}</h1>
        <h2>Courses By Type</h2>
        {Object.keys(coursesByType).map((type) => {
          return (
            <div key={coursesByType[type][0].type.name}>
              <h2>Type: {coursesByType[type][0].type.name}</h2>
              {coursesByType[type].map((course) => {
                return (
                  <div key={course.title}>
                    <div> Course name : {course.title} </div>
                    <div> Course start : {course.start} </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline'
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline'
        onClick={goToCourses}
      >
        Go To Courses
      </button>
      <button
        className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline'
        onClick={goToUserInfo}
      >
        Go To User Info
      </button>
    </div>
  );
};

export default memo(Home);
