import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import userReducer from './userReducer';
// import photosReducer from './photosReducer';

export default combineReducers({
  form: reduxForm,
  user: userReducer,
  // photos: photosReducer,
});
