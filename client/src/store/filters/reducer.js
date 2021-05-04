import { SET_FILTERS, SET_CATEGORIES, SET_DATE, UNSET_FILTERS } from './types';

const initialState = {
  categories: [],
  date: 'default',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        categories: action?.payload?.categories,
        date: action?.payload?.date,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action?.payload?.categories,
      };
    case SET_DATE:
      return {
        ...state,
        date: action?.payload?.date,
      };
    case UNSET_FILTERS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default filtersReducer;
