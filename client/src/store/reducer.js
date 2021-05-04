import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import workoutsReducer from './workouts/reducer';
import errorReducer from './errors/reducer';
import filtersReducer from './filters/reducer';
import history from './history';

const reducers = {
  router: connectRouter(history),
  workouts: workoutsReducer,
  errors: errorReducer,
  filters: filtersReducer,
};

export default combineReducers(reducers);
