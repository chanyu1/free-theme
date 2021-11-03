import { POSTCARD_MODAL } from '../_actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case POSTCARD_MODAL:
      return action.payload;
    default:
      return state;
  }
};
