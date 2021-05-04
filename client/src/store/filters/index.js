import { SET_FILTERS, SET_CATEGORIES, SET_DATE, UNSET_FILTERS } from './types';

export const setFilters = (filters) => {
  return async dispatch => {
    dispatch(setFiltersAction(filters));
  };
};

export const setCategories = (categories) => {
  return async dispatch => {
    dispatch(setCategoriesAction(categories));
  };
};

export const setDate = (date) => {
  return async dispatch => {
    dispatch(setDateAction(date));
  };
};

export const unsetFilters = () => {
  return async dispatch => {
    dispatch(unsetFiltersAction());
  };
};

const setFiltersAction = (data) => ({
  type: SET_FILTERS,
  payload: {
    ...data
  }
});

const setCategoriesAction = categories => ({
  type: SET_CATEGORIES,
  payload: {
    categories,
  },
});

const setDateAction = date => ({
  type: SET_DATE,
  payload: {
    date,
  },
});

const unsetFiltersAction = () => ({
  type: UNSET_FILTERS,
});
