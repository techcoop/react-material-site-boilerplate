import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import * as serviceWorker from 'react-material-site/lib/utils/serviceWorker'
import history from 'react-material-site/lib/utils/history'
import 'react-material-site/lib/utils/chat'
import 'react-material-site/lib/utils/analytics'
import 'react-material-site/lib/utils/logging'
import 'react-material-site/lib/utils/polyfill'

import { callback, login, logout, authenticated } from 'react-material-site/lib/modules/auth'
import { getRouterSwitch, getRouterData } from 'react-material-site/lib/routes'

import content from './content'
import createRootReducer from './reducers'
import routes from './content/routes'

import LogoLoader from 'react-material-site/lib/components/LogoLoader'
import AppContainer from 'react-material-site/lib/views/AppContainer'
import NotFound from 'react-material-site/lib/views/NotFound'
import * as views from './views'

// Get routes and menu data for app
const { route, menu } = getRouterData(routes, views, authenticated)

// Setup initial state of redux with content and menu data
const initialState = { content, menu }

// Build store with reducers
const store = createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
)

const extras = { NotFound: NotFound }
if (process.env.AUTH_ENABLED) {
  extras.login = login
  extras.logout = logout
}

// Build a router switch with routes from json and extras
const routerSwitch = getRouterSwitch(route, store, extras)

startApp([], [])

async function startApp(publicPromises, authPromises) {
  // If no auth, just render app
  if (!process.env.AUTH_ENABLED) {
    renderApp(publicPromises)
    return
  }

  if (window.location.pathname === '/callback' && /access_token|id_token|error/.test(window.location.hash)) {
    await store.dispatch(callback(() => {
      if (store.getState().auth.isAuthenticated()) {
        renderApp(authPromises)
      } else {
        renderApp(publicPromises)
      }
    }))

    return
  }
  
  if (store.getState().auth.isAuthenticated()) {
    renderApp(authPromises)
  } else {
    renderApp(publicPromises)
  }
}

async function renderApp(promises) {
  // Render loader
  ReactDOM.render(
    <div style={{width: '100%'}}><LogoLoader /></div>,
    document.getElementById('root')
  )

  Promise.all(promises.map((promise) => store.dispatch(promise()))).then(() => {
    ReactDOM.render(
      <AppContainer store={store} history={history} routes={routerSwitch} />,
      document.getElementById('root')
    )

    serviceWorker.unregister()
  })
}
