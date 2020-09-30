import axios from 'axios';

export const getTokenIfExists = () => {
  let token = localStorage.getItem('token');
  return token ? token : null;
};

export const Axios = (axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token')}`);
