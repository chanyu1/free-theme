import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import commonReducer from './commonReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import postcardReducer from './postcardReducer';

export default combineReducers({
  form: reduxForm,
  common: commonReducer,
  auth: authReducer,
  user: userReducer,
  postcards: postcardReducer,
});
