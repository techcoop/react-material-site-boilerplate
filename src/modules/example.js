// ------------------------------------
// Constants
// ------------------------------------
export const EXAMPLE_UPDATE = 'EXAMPLE_UPDATE'

// ------------------------------------
// Actions
// ------------------------------------
export const exampleUpdate = (params) => {
  return {
    type    : EXAMPLE_UPDATE,
    payload : params
  }
}

export const incrementExample = (event) => {
  return (dispatch, getState) => {
    dispatch(exampleUpdate({count: getState().example.count + 1}))
  }
}

export const actions = {
  incrementExample
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EXAMPLE_UPDATE] : (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  count: 0
}

export default function exampleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
