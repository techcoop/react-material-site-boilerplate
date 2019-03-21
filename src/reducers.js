import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// Get generic modules from react-material-site
import auth from 'react-material-site/lib/modules/auth'
import content from 'react-material-site/lib/modules/content'
import form from 'react-material-site/lib/modules/form'
import menu from 'react-material-site/lib/modules/menu'
import ui from 'react-material-site/lib/modules/ui'

// Get local modules
import example from './modules/example'

// Combine with router reducer
const createRootReducer = (history) => combineReducers({
  // Apply generic modules, not all of these are needed
  router: connectRouter(history),
  auth,
  content,
  form,
  menu,
  ui,

  // Apply custom modules, this is a basic example
  example
})

export default createRootReducer
