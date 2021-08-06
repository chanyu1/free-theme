import axios from 'axios';
import {
  FETCH_USER,
  AUTH_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SUBMIT_PHOTO,
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const authUser = (history, option, adminRoute) => async (dispatch) => {
  const res = await axios.get('/api/users/auth');

  if (!res.data.isAuth && option) {
    history.push('/login');
  } else if (!res.data.isAdmin && adminRoute) {
    history.push('/admin');
  } else if (res.data.isAuth && !option) {
    history.push('/photos');
  }
  dispatch({ type: AUTH_USER, payload: res.data });
};

export const registerUser = (dataToSubmit, history) => async (dispatch) => {
  const res = await axios.post('/api/users/register', dataToSubmit);

  if (res.data.registerSuccess) {
    history.push('/login');
    dispatch({ type: REGISTER_USER, payload: res.data });
  } else {
    alert(res.data.message);
  }
};

export const loginUser = (dataToSubmit) => async (dispatch) => {
  const res = await axios.post('/api/users/login', dataToSubmit);

  if (res.data.loginSuccess) {
    window.location.replace('/photos');
    // history.push('/photos');
    dispatch({ type: LOGIN_USER, payload: res.data });
  } else {
    alert(res.data.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/api/users/logout');

  if (res.data.logoutSuccess) {
    window.location.replace('/');
    // history.push('/');
    dispatch({ type: LOGOUT_USER, payload: res.data });
  } else {
    alert(res.data.message);
  }
};

export const submitPhoto = (dataToSubmit, history) => async (dispatch) => {
  const res = await axios.post('/api/photos', dataToSubmit, {
    header: { 'content-type': 'multipart/form-data' },
  });

  history.push('/photos');
  dispatch({ type: SUBMIT_PHOTO, payload: res.data });
};
