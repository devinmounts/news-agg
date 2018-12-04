import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { HashRouter } from 'react-router-dom';

import Firebase, { FirebaseContext } from './components/Firebase';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <HashRouter>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </HashRouter>,
  document.getElementById('react-app-root')
);
