import { combineReducers } from 'redux'
import {
  signupUsernameChange,
  signupPasswordChange,
  signupEmailChange
} from './signup'

export default combineReducers({
  signupUsernameChange,
  signupPasswordChange,
  signupEmailChange
})
