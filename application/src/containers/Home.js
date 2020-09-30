import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/global';
import { getCourses } from '../redux/actions/courses';
import { getScopes } from '../redux/actions/scopes';
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

  const coursesByType = useSelector((state) => {
    return selectors.getCoursesByType(state);
  });
  const scopesByName = useSelector((state) => {
    return selectors.getScopesByName(state);
  });

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
      <button onClick={handleLogout}>Logout</button>
      <button onClick={goToCourses}>Go To Courses</button>
    </div>
  );
};

export default memo(Home);
