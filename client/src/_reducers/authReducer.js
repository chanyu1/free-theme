import { FETCH_USER } from '../_actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log('FETCH_USER', action.payload);
      return action.payload || false;
    default:
      return state;
  }
};
