import { MODAL_POSTCARD } from '../_actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case MODAL_POSTCARD:
      return action.payload;
    default:
      return state;
  }
};
