import axios from 'axios'
import qs from 'qs'

import history from '../history'
import {
  CURRENT_USER,
  MESSAGES_CLEAR,
  MESSAGE_LOGIN,
  UPLOAD_FILE
} from '../consts.js'

export const getUser = () => dispatch => {
   axios.get('/api/user/')
     .then(res => {
       dispatch({type: CURRENT_USER, payload: res.data.user})
     })
}

export const login = (login, password) => dispatch => {
  axios.post('/auth/login', qs.stringify({username: login, password}))
    .then(res => {
      var {user} = res.data
      if (user) history.push('/admin/')
      dispatch({type: CURRENT_USER, payload: user})
      dispatch({type: MESSAGE_LOGIN, payload: null})
    })
    .catch((err) => {
      var {message} = err.response.data
      dispatch({type: MESSAGE_LOGIN, payload: {type: 'error', header: 'Error!', text: message}})
    })
}

export const clearMessage = () => dispatch => {
  dispatch({type: MESSAGES_CLEAR})
}

export const logout = () => dispatch => {
  axios.get('/auth/logout')
    .then( () => {
      history.push('/admin')
      dispatch({type: CURRENT_USER, payload: null})
    })
}


export const uploadFile = file => dispatch => {
  var formData = new FormData()
  formData.append('file', file)
  axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
   .then( res => {
     var {filePath} = res.data
     dispatch({type: UPLOAD_FILE, payload: filePath})
   })
   .catch( err => {
     console.log(err)
   })
}
