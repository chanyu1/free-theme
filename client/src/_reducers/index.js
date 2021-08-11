import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
// import userReducer from './userReducer';
import postcardsReducer from './postcardsReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  // user: userReducer,
  postcards: postcardsReducer,
});
