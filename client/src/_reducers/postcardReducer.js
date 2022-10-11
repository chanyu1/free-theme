import {
  FETCH_POSTCARDS,
  POSTCARD_MODAL,
  SEARCH_POSTCARDS,
} from '../_actions/types';

const initialState = {
  postcardList: [],
  postcardModal: [],
  searchPostcardList: [],
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
    case SEARCH_POSTCARDS:
      return {
        ...state,
        searchPostcardList: action.payload,
      };
    default:
      return state;
  }
};
