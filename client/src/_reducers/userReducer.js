import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../_actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
};
