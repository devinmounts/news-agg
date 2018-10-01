import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { HashRouter } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('react-app-root')
);
