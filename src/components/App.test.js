import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../configureStore';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const params = {};

  ReactDOM.render(
    <Provider store={store}>
      <App params={params}/>
    </Provider>, div
  );
});
