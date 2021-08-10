import { FETCH_POSTCARDS } from '../_actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTCARDS:
      return action.payload;
    default:
      return state;
  }
};
