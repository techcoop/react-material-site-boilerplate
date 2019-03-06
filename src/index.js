import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import * as serviceWorker from 'react-material-site/lib/utils/serviceWorker'
import history from 'react-material-site/lib/utils/history'
import 'react-material-site/lib/utils/chat'
import 'react-material-site/lib/utils/analytics'
import 'react-material-site/lib/utils/logging'
import 'react-material-site/lib/utils/polyfill'

import { callback, login, logout, authenticated } from 'react-material-site/lib/modules/auth'
import { getRouterSwitch, getRouterData } from 'react-material-site/lib/routes'

import content from './content'
import reducers from './reducers'
import routes from './content/routes'

import AppContainer from 'react-material-site/lib/views/AppContainer'
import NotFound from 'react-material-site/lib/views/NotFound'
import * as views from './views'

// Get routes and menu data for app
const { route, menu } = getRouterData(routes, views, authenticated)

// Setup initial state of redux with content and menu data
const initialState = { content, menu }

// Build store with reducers
const store = createStore(reducers, initialState, applyMiddleware(thunk, routerMiddleware(history)))
const extras = {NotFound: NotFound}
if (process.env.AUTH_ENABLED) {
  extras.callback = callback
  extras.login = login
  extras.logout = logout
}

// Build a router switch with routes from json and extras
const routerSwitch = getRouterSwitch(route, store, extras)

// Construct our app
ReactDOM.render(
  <AppContainer store={store} history={history} routes={routerSwitch} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
