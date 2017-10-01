
export function loginUsernameChange(state="", action){
  switch(action.type){
    case 'LOGIN_USERNAME_CHANGE':
      return action.username
    default:
      return state
  }
}

export function loginPasswordChange(state="", action){
  switch(action.type){
    case 'LOGIN_PASSWORD_CHANGE':
      return action.password
    default:
      return state
  }
}
