import axios from 'axios';
import camelize from 'camelize';
import { getTokenIfExists } from './utils';
import * as API from './constants/api';

axios.defaults.headers.common['ContentType'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${getTokenIfExists()}`;

const camelizeInterceptor = (response) => {
  // Do something with response data
  if (response.data && response.data.data) {
    // let t0 = performance.now();
    response.data.data = camelize(response.data.data);
    // let t1 = performance.now();
    // console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
  }
  return response;
};

axios.interceptors.response.use(camelizeInterceptor, (error) =>
  Promise.reject(error)
);
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return new Promise((resolve, reject) => {
//       const originalReq = error.config;
//       if (
//         error.response.status === 401 &&
//         error.config &&
//         !error.config.__isRetryRequest
//       ) {
//         originalReq._retry = true;

//         let res = fetch(`${API.API_URL}/${API.AUTH_REFRESH_TOKEN_API}`, {
//           method: 'POST',
//           mode: 'cors',
//           cache: 'no-cache',
//           credentials: 'same-origin',
//           headers: {
//             'Content-Type': 'application/json',
//             Device: 'device',
//             Token: localStorage.getItem('token')
//           },
//           redirect: 'follow',
//           referrer: 'no-referrer',
//           body: JSON.stringify({
//             token: localStorage.getItem('token'),
//             refresh_token: localStorage.getItem('refresh_token')
//           })
//         })
//           .then((res) => res.json())
//           .then((res) => {
//             console.log(res);
//             this.setSession({ token: res.token, refresh_token: res.refresh });
//             originalReq.headers['Token'] = res.token;
//             originalReq.headers['Device'] = 'device';

//             return axios(originalReq);
//           });

//         resolve(res);
//       }

//       return Promise.reject(error);
//     });
//   }
// );
