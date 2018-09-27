import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import rootReducer from './reducers';
import sourceReducer from './reducers/sourceReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(sourceReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app-root')
);
