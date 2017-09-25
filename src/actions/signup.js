/* 
 * Following function handles changes in signup form and 
 * calls the appropriate action-creator depending upon the field changed.
*/

export function signupHandleFormChange(event){
  switch(event.target.id){
    case 'username':
      return signupUsernameChange(event.target.value)
    case 'email':
      return signupEmailChange(event.target.value)
    default:
      return signupPasswordChange(event.target.value)
  }
}

/* Following action-creator is triggered by signupHandleFormChange function 
 * when username field is changed in signup form
*/
export function signupUsernameChange(username){
  return {
    type: 'SIGNUP_USERNAME_CHANGE',
    username
  }
}

/* Following action-creator is triggered by signupHandleFormChange function 
 * when email field is changed in signup form
*/
export function signupEmailChange(email){
  return {
    type: 'SIGNUP_EMAIL_CHANGE',
    email
  }
}

/* Following action-creator is triggered by signupHandleFormChange function 
 * when password field is changed in signup form
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

