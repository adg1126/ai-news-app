import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />{' '}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
