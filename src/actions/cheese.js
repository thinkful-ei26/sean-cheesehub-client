import {SERVER_ORIGIN} from '../config';

const fetchCheesesRequest = () => ({
  type: 'FETCH_CHEESES_REQUEST',
});

const fetchCheesesSuccess = (data) => ({
  type: 'FETCH_CHEESES_SUCCESS',
  data
});

const fetchCheesesError = (err) => ({
  type: 'FETCH_CHEESES_ERROR',
  err
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  fetch(`${SERVER_ORIGIN}/api/cheeses`)
    .then(res => {
      if (!res.ok) return Promise.reject(res.statusText);
      return res.json();
    })
    .then(data => dispatch(fetchCheesesSuccess(data)))
    .catch(err => dispatch(fetchCheesesError(err)));
}
