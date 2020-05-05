const articles = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_ARTICLE':
        return [
          ...state,
          {
            id: action.id,
            search: action.text,
            pin: false
          }
        ]
      case 'PIN_ARTICLE':
        return state.map(article =>
          article.id === action.id ? Object.assign({}, {id: article.id, pin: !article.pin}) : article
        )
      default:
        return state
    }
  }
  export default articles