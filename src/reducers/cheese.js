const initialState = {cheeses: [], loading: false, error: null};

export const cheeseReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHEESES_REQUEST':
      return {...state, loading: true};
    case 'FETCH_CHEESES_SUCCESS':
      return {cheeses: action.data, loading: false, error: null};
    case 'FETCH_CHEESES_ERROR':
      return {cheeses: state.cheeses, loading: false, error: action.err};
    default:
      return state;
  }
};
