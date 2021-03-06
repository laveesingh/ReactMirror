import { combineReducers } from 'redux'
import {
  signupUsernameChange,
  signupPasswordChange,
  signupEmailChange
} from './signup'
import { loginUsernameChange, loginPasswordChange } from './login'
import { navKeywordChange } from './navbar1'

export default combineReducers({
  signupUsernameChange,
  signupPasswordChange,
  signupEmailChange,
  loginUsernameChange,
  loginPasswordChange
})
