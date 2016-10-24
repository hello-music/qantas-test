import { fromJS } from 'immutable';

const SELECT_MAKE = 'SELECT_MAKE';
const SELECT_MODEL = 'SELECT_MODEL';
const CLEAR_SELECTION = 'CLEAR_SELECTION';

export function selectMake (makeId) {
  return {
    type: SELECT_MAKE,
    makeId,
  };
}

export function selectModel (modelId) {
  return {
    type: SELECT_MODEL,
    modelId,
  };
}
export function clearSelection () {
  return {
    type: CLEAR_SELECTION,
  };
}

const initialState = fromJS({
  makeId: '',
  modelId: '',
});

export default function selection (state = initialState, action) {
  switch (action.type) {
    case SELECT_MAKE:
      return state.merge({
        makeId: action.makeId,
        modelId: '',
      });
    case SELECT_MODEL:
      return state.merge({
        modelId: action.modelId,
      });
    case CLEAR_SELECTION:
      return state.merge({
        makeId: '',
        modelId: '',
      });
    default :
      return state;
  }
}

