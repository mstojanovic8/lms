export const getTokenIfExists = () => {
  console.log(
    '========== gettokenif =========== ',
    localStorage.getItem('token')
  );

  return localStorage.getItem('token') ? localStorage.getItem('token') : null;
};
