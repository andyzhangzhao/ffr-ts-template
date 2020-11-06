import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../routes/user/userReducers';

export const isDevelopment = process.env.NODE_ENV === 'development';

const rootReducers = combineReducers({ user: reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [thunkMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof rootReducers>;
export const store = createStore(rootReducers, enhancer);
