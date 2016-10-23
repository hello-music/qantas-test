import { fromJS } from 'immutable';

const FETCHING_CAR_OF_THE_WEEK_SUCCESS = 'FETCHING_CAR_OF_THE_WEEK_SUCCESS';

export function fetchingCarOfTheWeekSuccess (carOfTheWeek) {
  return {
    type: FETCHING_CAR_OF_THE_WEEK_SUCCESS,
    carOfTheWeek,
  };
}

const initialState = fromJS({});

export default function carOfTheWeek (state = initialState, action) {
  switch (action.type) {
    case FETCHING_CAR_OF_THE_WEEK_SUCCESS:
      return state.merge(action.carOfTheWeek);
    default :
      return state;
  }
}

