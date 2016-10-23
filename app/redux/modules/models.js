import { fromJS } from 'immutable';

const FETCHING_MODELS_SUCCESS = 'FETCHING_MODELS_SUCCESS';

export function fetchingModelsSuccess (models) {
  return {
    type: FETCHING_MODELS_SUCCESS,
    models,
  };
}

const initialState = fromJS([]);

export default function models (state = initialState, action) {
  switch (action.type) {
    case FETCHING_MODELS_SUCCESS:
      return state.merge(action.models);
    default :
      return state;
  }
}

