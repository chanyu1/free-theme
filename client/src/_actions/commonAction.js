import { HIDE_ADD_BTN, FIX_SCROLLBAR, IS_LOADING } from './types';

export const hideAddBtn = (changeAction) => (dispatch) => {
  dispatch({ type: HIDE_ADD_BTN, payload: changeAction });
};

export const fixScrollbar = (changeAction) => (dispatch) => {
  dispatch({ type: FIX_SCROLLBAR, payload: changeAction });
};

export const isLoading = (changeAction) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: changeAction });
};
