const articles = (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_ARTICLES':
        return action.data
      case 'PIN_ARTICLE':
        return state.map(article =>
          article.id === action.id ? Object.assign({}, {id: article.id, pin: !article.pin}) : article
        )
      default:
        return state
    }
  }
  export default articles