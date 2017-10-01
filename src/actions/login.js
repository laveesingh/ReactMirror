/* 
 * Following function handles changes in login form and 
 * calls the appropriate action-creator depending upon the field changed.
*/

export function loginHandleFormChange(event){
  switch(event.target.id){
    case 'username':
      return loginUsernameChange(event.target.value)
    default:
      return loginPasswordChange(event.target.value)
  }
}

/* Following action-creator is triggered by loginHandleFormChange function 
 * when username field is changed in login form
*/
export function loginUsernameChange(username){
  return {
    type: 'LOGIN_USERNAME_CHANGE',
    username
  }
}

/* Following action-creator is triggered by loginHandleFormChange function 
 * when password field is changed in login form
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
