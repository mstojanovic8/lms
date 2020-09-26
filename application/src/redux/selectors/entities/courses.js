import { createSelector } from 'reselect';

export const getCourses = (state) => state.entities.courses;

export const getCoursesById = (state) => state.entities.courses.byId;


export const getCoursesByType = createSelector([getCoursesById], (courses) => {
  const coursesByType = {};
  Object.keys(courses).forEach((id) => {
    const course = courses[id];

    coursesByType[course.type.id] = [
      ...(coursesByType[course.type.id] ? coursesByType[course.type.id] : []),
      course
    ];
  });

  return coursesByType;
});

export const getIsLoadingUsers = (state) => state.entities.users.isLoading;

export const getIsUsersInitialized = (state) =>
  state.entities.users.isInitialized;

