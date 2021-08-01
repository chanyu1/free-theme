import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

export const loginUser = (dataToSubmit, history) => async (dispatch) => {
  const res = await axios.post('/api/users/login', dataToSubmit);

  if (res.data.loginSuccess) {
    history.push('/photos');
    dispatch({ type: LOGIN_USER, payload: res.data });
  } else {
    alert('Failed to sign in.');
  }
};

export function registerUser(dataToSubmit) {
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get('/api/users/auth')
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}

// export function loginUser(dataToSubmit) {
//   const request = axios
//     .post('/api/users/login', dataToSubmit)
//     .then((response) => response.data);
//   return {
//     type: LOGIN_USER,
//     payload: request,
//   };
// }

// export function registerUser(dataToSubmit) {
//   const request = axios
//     .post('/api/users/register', dataToSubmit)
//     .then((response) => response.data);
//   return {
//     type: REGISTER_USER,
//     payload: request,
//   };
// }

// export function auth() {
//   const request = axios
//     .get('/api/users/auth')
//     .then((response) => response.data);
//   return {
//     type: AUTH_USER,
//     payload: request,
//   };
// }
