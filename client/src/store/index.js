import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import history from './history';
import rootReducer from './reducer';

const initialState = () => {
  return {
    workouts: {
      items: [],
      count: 0,
      isLoading: false,
      error: null,
    },
    filters: {
      categories: [],
      date: 'default',
    }
  };
};

const middleWare =
  process.env.NODE_ENV !== 'production'
    ? [logger, routerMiddleware(history)]
    : [routerMiddleware(history)];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  initialState(),
  composeEnhancers(applyMiddleware(thunk, ...middleWare))
);

export default store;
