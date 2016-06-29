import axios from 'axios'
import { browserHistory } from 'react-router'

const API = 'http://localhost:3090'

export const AUTH_USER = 'auth_user'
export const UNAUTH_USER = 'unauth_user'
export const AUTH_ERROR = 'auth_error'


export function signInUser({email, password}) {
  return (dispatch) => {
    axios.post(`${API}/signin`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
      })
      .catch(()=> {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  console.log(error)
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
