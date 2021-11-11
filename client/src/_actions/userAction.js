import axios from 'axios';

import { AUTH_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER } from './types';

export const authUser = (history, option, adminRoute) => async (dispatch) => {
  const res = await axios.get('/api/users/auth');
  if (!res.data.isAuth && option) {
    history.push('/login');
  } else if (!res.data.isAdmin && adminRoute) {
    history.push('/admin');
  } else if (res.data.isAuth && !option) {
    history.push('/postcards');
  }
  dispatch({ type: AUTH_USER, payload: res.data });
};

export const registerUser = (dataToSubmit, history) => async (dispatch) => {
  const res = await axios.post('/api/users/register', dataToSubmit);
  if (res.data.success) {
    history.push('/login');
    dispatch({ type: REGISTER_USER, payload: res.data });
  } else {
    alert(res.data.message);
  }
};

export const loginUser = (dataToSubmit) => async (dispatch) => {
  const res = await axios.post('/api/users/login', dataToSubmit);
  if (res.data.success) {
    window.location.replace('/postcards');
    dispatch({ type: LOGIN_USER, payload: res.data });
  } else {
    alert(res.data.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/api/users/logout');
  if (res.data.success) {
    window.location.replace('/');
    dispatch({ type: LOGOUT_USER, payload: res.data });
  } else {
    alert(res.data.message);
  }
};
