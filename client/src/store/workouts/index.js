import { WORKOUTS_REQUEST, WORKOUTS_SUCCESS, WORKOUTS_ERROR } from './types';
import { BASE_URL } from '../../constants';
import { executeFetch, enumerate } from '../../services';

export const getWorkoutItems = ({ page, limit, categories, startDate }) => {
  const url = `${BASE_URL}/workouts/search/params?limit=${limit}&page=${page}&category=${categories}&start_date=${startDate}`;

  return async dispatch => {
    dispatch(workoutsRequestAction());
    
    try {
      const result = await executeFetch(url);
      dispatch(workoutsSuccessAction({
        items: enumerate(result?.data?.rows, page, limit),
        count: result?.data?.count,
      }));
    } catch (error) {
      dispatch(workoutsFailureAction(error, 'grid'));
    }
  };
};

const workoutsRequestAction = () => ({
  type: WORKOUTS_REQUEST,
});

const workoutsSuccessAction = data => ({
  type: WORKOUTS_SUCCESS,
  payload: {
    ...data,
  },
});

const workoutsFailureAction = (error, page) => ({
  type: WORKOUTS_ERROR,
  payload: {
    error: error.message,
    page,
  },
});
