import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from 'reducer';
import AppRouter from 'route';
import 'scss/app.scss';
import API from 'common/api';

(function Init() {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    (f) => { return f; }
  )(createStore);

  window.API = new API();
  const store = finalCreateStore(rootReducer);
  render(
    <Provider
      store={ store }
    >
      <AppRouter />
    </Provider>,
    document.getElementById('app')
  );

  if (module.hot) {
    module.hot.accept();
  }
}());
