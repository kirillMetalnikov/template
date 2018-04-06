import {combineReducers} from 'redux'

import {
  CURRENT_USER,
  MESSAGES_CLEAR,
  MESSAGE_LOGIN,
  UPLOAD_FILE
} from '../consts.js'

const user = ( state = null, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload
    default:
      return state
  }
}

const messages = (
  state = {
    loginForm: null,
  },
  action) => {
    switch (action.type) {
      case MESSAGE_LOGIN:
        var newState = Object.assign({}, state)
        newState.loginForm = action.payload
        return newState
      case MESSAGES_CLEAR:
        return {
          loginForm: null,
        }
      default:
        return state
  }
}

const uploadedFile = (state = null, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  user,
  messages,
  uploadedFile
})
