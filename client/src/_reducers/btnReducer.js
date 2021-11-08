import { HIDE_ADD_BTN } from '../_actions/types';

export default (state = false, action) => {
  console.log('btn rerender');
  switch (action.type) {
    case HIDE_ADD_BTN:
      return action.payload;
    default:
      return state;
  }
};
