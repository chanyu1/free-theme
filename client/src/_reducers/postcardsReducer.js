import { FETCH_POSTCARDS } from '../_actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTCARDS:
      console.log('FETCH_POSTCARDS', action.payload);
      return action.payload;
    default:
      return state;
  }
};
