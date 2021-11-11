import { FETCH_POSTCARDS, POSTCARD_MODAL } from '../_actions/types';

const initialState = {
  postcardList: [],
  postcardModal: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTCARDS:
      return {
        ...state,
        postcardList: action.payload,
      };
    case POSTCARD_MODAL:
      return {
        ...state,
        postcardModal: action.payload,
      };
    default:
      return state;
  }
};
