import { WORKOUTS_REQUEST, WORKOUTS_SUCCESS, WORKOUTS_ERROR } from './types';

const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORKOUTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case WORKOUTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action?.payload?.items,
        count: action?.payload?.count,
      };
    case WORKOUTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default loginReducer;
