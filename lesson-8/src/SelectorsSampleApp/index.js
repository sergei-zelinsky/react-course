import React from 'react';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SelectorsSampleApp from './SelectorsSampleApp';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <SelectorsSampleApp />
  </Provider>
);

export default App;
