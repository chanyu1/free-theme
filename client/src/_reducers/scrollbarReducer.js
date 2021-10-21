import { FIX_SCROLLBAR } from '../_actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case FIX_SCROLLBAR:
      console.log('fix_s');
      return action.payload;
    default:
      return state;
  }
};
