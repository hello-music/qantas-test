import { fromJS } from 'immutable';

const SELECT_MAKE = 'SELECT_MAKE';
const SELECT_MODEL = 'SELECT_MODEL';

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

const initialState = fromJS({
    makeId: '',
    modelId: '',
});

export default function selection (state = initialState, action) {
    switch (action.type) {
        case SELECT_MAKE:
            return state.merge({
                makeId: action.makeId,
            });
        case SELECT_MODEL:
            return state.merge({
                modelId: action.modelId,
            });
        default :
            return state;
    }
}

