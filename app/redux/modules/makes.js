import { fromJS } from 'immutable';

const FETCHING_MAKES_SUCCESS = 'FETCHING_MAKES_SUCCESS';

export function fetchingMakesSuccess (makes) {
  return {
    type: FETCHING_MAKES_SUCCESS,
    makes,
  };
}

const initialState = fromJS([]);

export default function makes (state = initialState, action) {
  switch (action.type) {
    case FETCHING_MAKES_SUCCESS:
      return state.merge(action.makes);
    default :
      return state;
  }
}

