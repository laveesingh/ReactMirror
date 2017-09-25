
export function signupUsernameChange(state="", action){
  switch(action.type){
    case 'SIGNUP_USERNAME_CHANGE':
      return action.username
    default:
      return state
  }
}

export function signupPasswordChange(state="", action){
  switch(action.type){
    case 'SIGNUP_PASSWORD_CHANGE':
      return action.password
    default:
      return state
  }
}

export function signupEmailChange(state="", action){
  switch(action.type){
    case 'SIGNUP_EMAIL_CHANGE':
      return action.email
    default:
      return state
  }
}
