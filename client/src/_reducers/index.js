import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import postcardsReducer from './postcardsReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  postcards: postcardsReducer,
});
