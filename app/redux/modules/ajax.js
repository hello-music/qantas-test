import { fromJS } from 'immutable';

const FETCHING = 'FETCHING';
const FETCHING_FAILURE = 'FETCHING_FAILURE';
const FETCHING_SUCCESS = 'FETCHING_SUCCESS';

function startFetching () {
  return {
    type: FETCHING,
  };
}

function fetchingFailure () {
  return {
    type: FETCHING_FAILURE,
    error: 'Error fetching data.',
  };
}

export function fetchingSuccess (data) {
  return {
    type: FETCHING_SUCCESS,
  };
}

export function fetchAndHandleAjax (apiFunc) {
  return function (dispatch) {
    dispatch(startFetching());
    return apiFunc().then(
            data => {
              dispatch(fetchingSuccess(data));
              return data;
            },
            error => dispatch(fetchingFailure(error))
        );
  };
}

const initialState = fromJS({
  isFetching: false,
  error: '',
});

export default function ajax (state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return state.merge({
        isFetching: true,
        error: '',
      });
    case FETCHING_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case FETCHING_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
      });
    default :
      return state;
  }
}

