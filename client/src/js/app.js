import ReactDOM from 'react-dom'
import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import rootReducer from './reducers/reducers'
import App from './components/App.js'
import Signin from './components/auth/Signin'
import Signout from './components/auth/Signout'
import Signup from './components/auth/Signup'

let createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
   , document.getElementById('app')
)
