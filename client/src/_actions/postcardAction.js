import axios from 'axios';

import {
  FETCH_POSTCARDS,
  UPLOAD_POSTCARD,
  POSTCARD_MODAL,
  SEARCH_POSTCARDS,
} from './types';

export const fetchPostcards = () => async (dispatch) => {
  const res = await axios.get('/api/postcards');
  dispatch({ type: FETCH_POSTCARDS, payload: res.data.reverse() });
};

export const uploadPostcard = (dataToSubmit, history) => async (dispatch) => {
  const res = await axios.post('/api/postcards/upload', dataToSubmit, {
    header: { 'content-type': 'multipart/form-data' },
  });
  history.push('/postcard');
  dispatch({ type: UPLOAD_POSTCARD, payload: res.data });
};

export const postcardModal = (changeAction) => (dispatch) => {
  dispatch({ type: POSTCARD_MODAL, payload: changeAction });
};

export const searchPostcards = (dataToSubmit) => (dispatch) => {
  dispatch({ type: SEARCH_POSTCARDS, payload: dataToSubmit });
};
