import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Get generic modules from react-material-site
import auth from 'react-material-site/lib/modules/auth'
import content from 'react-material-site/lib/modules/content'
import form from 'react-material-site/lib/modules/form'
import menu from 'react-material-site/lib/modules/menu'
import ui from 'react-material-site/lib/modules/ui'

// Get local modules
import example from './modules/example'

// Combine with router reducer
const reducers = combineReducers({
  // Apply generic modules, not all of these are needed
  router: routerReducer,
  auth,
  content,
  form,
  menu,
  ui,

  // Apply custom modules, this is a basic example
  example
})

export default reducers
