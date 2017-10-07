/*
 * Following is action creator for event when username is changed in login form
 */
export function loginUsernameChange(username){
  return {
    type: 'LOGIN_USERNAME_CHANGE',
    username
  }
}

/* 
 * Following is action creator for event when password is changed in login form
*/
export function loginPasswordChange(password){
  return {
    type: 'LOGIN_PASSWORD_CHANGE',
    password
  }
}

export function loginSuccessful(username){
  return {
    type: 'LOGIN_SUCCESSFUL',
    username
  }
}

export function loginFormSubmit(payload, dispatch){
  console.log("Logging in...", payload.username)
  dispatch(loginSuccessful(payload.username))
}
