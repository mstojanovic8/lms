import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getToken, logout } from '../redux/actions/global';
import { getCourses } from '../redux/actions/courses';
import * as selectors from '../redux/selectors';

const Home = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCourses({
        viaResource: 'course',
        viaResourceId: 1
      })
    );
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

  console.log('========== coursesByType =========== ', coursesByType);

  return (
    <div>
      App <br />
      <div>
        <h2>Courses By Type</h2>
        {Object.keys(coursesByType).map((type) => {
          console.log(
            '========== coursesByType[type] =========== ',
            coursesByType[type]
          );

          return (
            <div>
              <h2>Type {coursesByType[type][0].type.name}</h2>
              {coursesByType[type].map((course) => {
                return (
                  <div>
                    <div> Course name : {coursesByType[type].title} </div>
                    <div> Course start : {coursesByType[type].start} </div>
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
