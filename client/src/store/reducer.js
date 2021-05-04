import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import workoutsReducer from './workouts/reducer';
import errorReducer from './errors/reducer';
import history from './history';

const reducers = {
  router: connectRouter(history),
  workouts: workoutsReducer,
  errors: errorReducer,
};

export default combineReducers(reducers);
