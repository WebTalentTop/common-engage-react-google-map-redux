import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

const initialState = {};
const logger = createLogger();

export default function configureStore() {
  let store;

  if (module.hot) {
    // Support hot reloading of components
    const composeEnhancers = composeWithDevTools({});
    const devToolMiddleware = composeEnhancers(applyMiddleware(thunkMiddleware, logger));

    store = createStore(
      rootReducer,
      initialState,
      devToolMiddleware,
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware),
    );
  }

  return store;
}
