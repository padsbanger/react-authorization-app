import ReactDOM from 'react-dom'
import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import { AUTH_USER } from './actions/index'
import rootReducer from './reducers/reducers'
import App from './components/App.js'
import Signin from './components/auth/Signin'
import Signout from './components/auth/Signout'
import Signup from './components/auth/Signup'
import Feature from './components/Feature'
import RequireAuth from './components/auth/RequireAuth'

let createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)
const token = localStorage.getItem('token')

if(token) {
  store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
   , document.getElementById('app')
)
