import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import usersReducer from './usersReducer';
import postcardsReducer from './postcardsReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  users: usersReducer,
  postcards: postcardsReducer,
});
