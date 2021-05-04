import { WORKOUTS_REQUEST, WORKOUTS_SUCCESS, WORKOUTS_ERROR } from './types';
import { BASE_URL } from '../../constants';
import { executeFetch, enumerate } from '../../services';

export const getWorkoutItems = ({ page, limit, categories, startDate }) => {
  const url = `${BASE_URL}/workouts/search/params?limit=${limit}&page=${page}&category=${categories}&start_date=${startDate}`;

  return async dispatch => {
    dispatch(workoutsRequest());
    
    try {
      const result = await executeFetch(url);
      dispatch(workoutsSuccess({
        items: enumerate(result?.data?.rows, page, limit),
        count: result?.data?.count,
      }));
    } catch (error) {
      dispatch(workoutsFailure(error, 'grid'));
    }
  };
};

const workoutsRequest = () => ({
  type: WORKOUTS_REQUEST,
});

const workoutsSuccess = data => ({
  type: WORKOUTS_SUCCESS,
  payload: {
    ...data,
  },
});

const workoutsFailure = (error, page) => ({
  type: WORKOUTS_ERROR,
  payload: {
    error: error.message,
    page,
  },
});
