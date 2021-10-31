import {
  FETCH_POSTCARDS,
  POSTCARD_MODAL,
  FIX_SCROLLBAR,
} from '../_actions/types';

const initialState = {
  postcardList: [],
  postcardModal: [],
  // fixScrollbar: false,
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
    // case FIX_SCROLLBAR:
    //   return {
    //     ...state,
    //     fixScrollbar: action.payload,
    //   };
    default:
      return state;
  }
};
