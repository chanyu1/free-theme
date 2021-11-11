import { HIDE_ADD_BTN, FIX_SCROLLBAR } from './types';

export const hideAddBtn = (changeAction) => (dispatch) => {
  dispatch({ type: HIDE_ADD_BTN, payload: changeAction });
};

export const fixScrollbar = (changeAction) => (dispatch) => {
  dispatch({ type: FIX_SCROLLBAR, payload: changeAction });
};
