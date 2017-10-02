/* Following action-creator is triggered when username 
 * field is changed in signup form
*/
export function signupUsernameChange(username){
  return {
    type: 'SIGNUP_USERNAME_CHANGE',
    username
  }
}

/* Following action-creator is triggered when email
 * field is changed in signup form
*/
export function signupEmailChange(email){
  return {
    type: 'SIGNUP_EMAIL_CHANGE',
    email
  }
}

/* Following action-creator is triggered when password 
 * field is changed in signup form
*/
export function signupPasswordChange(password){
  return {
    type: 'SIGNUP_PASSWORD_CHANGE',
    password
  }
}

export function signupHandleFormSubmit(event){
  /* Steps to write handleSubmit
   * First import signup endpoint from utils/configs.js
   * record all data from state and send a post reqeust
   */
}

export function handleGoogleClick(event){
  /*
   * This function handles login via google+
   */
}

export function handleFacebookClick(event){
  /*
   * This function handles login via facebook
   */
}

export function handleTwitterClick(event){
  /*
   * This function handles login via twitter
   */
}

