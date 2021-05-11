import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(sagas);

// Hot reloading fix for redux
if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers);
  });
}

export default store;
