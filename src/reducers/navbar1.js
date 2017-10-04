
export function navKeywordChange(state={keyword:''}, action){
  switch(action.type){
    case 'NAV_KEYWORD_CHANGE':
      return {keyword: action.keyword}
      break
  }
  return state
}
