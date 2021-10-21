import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import userReducer from './userReducer';
import postcardsReducer from './postcardsReducer';
import postcardReducer from './postcardReducer';
import btnReducer from './btnReducer';
import scrollbarReducer from './scrollbarReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  user: userReducer,
  postcards: postcardsReducer,
  postcard1: postcardReducer,
  hideBtn: btnReducer,
  fixScrollbar: scrollbarReducer,
});
