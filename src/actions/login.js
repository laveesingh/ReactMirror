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

export function loginHandleFormSubmit(event){
  /* Steps to write handleSubmit
   * First import login endpoint from utils/configs.js
   * record all data from state and send a post reqeust
   */
}
