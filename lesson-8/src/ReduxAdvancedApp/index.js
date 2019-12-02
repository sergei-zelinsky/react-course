import React from 'react';
import reducer from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import SelectorsSampleApp from './SelectorsSampleApp';
import createSagaMiddleware from 'redux-saga';
import DevTools from './DevTools';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

const ReduxAdvancedApp = () => (
  <Provider store={store}>
    <DevTools />
    <SelectorsSampleApp />
  </Provider>
);

export default ReduxAdvancedApp;
