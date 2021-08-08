import { UPLOAD_POSTCARD } from '../_actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_POSTCARD:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
