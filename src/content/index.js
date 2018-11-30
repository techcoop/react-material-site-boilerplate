// All of these messages will trigger an error message to be displayed in the UI
// Disable any of these messages by removing them from the language JSON file

// AUTH_LOGIN_FAILED - When user login fails
// AUTH_NOT_ENABLED - When auth is not configured but authentication features are used
// AUTH_PROFILE_FAILED - When there is no access_token but profile was fetched

import { Document } from 'json-google-docs'

import uiJSON from './ui.json'
import formsJSON from './forms.json'
import localJSON from './local.json'
import textJSON from './text.json'

export const text = new Document('./text.json')
text.data = textJSON

export const local = new Document('./local.json')
local.data = localJSON

export const forms = formsJSON
export const ui = uiJSON

export default {
  ui: ui,
  forms: forms,
  text: text,
  local: local
}
