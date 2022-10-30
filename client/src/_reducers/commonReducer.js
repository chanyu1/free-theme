import { HIDE_ADD_BTN, FIX_SCROLLBAR, IS_LOADING } from '../_actions/types';

const initialState = {
  hideAddBtn: false,
  fixScrollbar: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HIDE_ADD_BTN:
      return {
        ...state,
        hideAddBtn: action.payload,
      };
    case FIX_SCROLLBAR:
      return {
        ...state,
        fixScrollbar: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
