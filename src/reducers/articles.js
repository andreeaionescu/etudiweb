const articles = (state = {}, action) => {
    switch (action.type) {
      case 'RECEIVE_ARTICLES':
        return Object.assign({}, action.data) //Object.keys(action.data).map(key => Object.assign({}, {[key]: action.data[key]}))
      case 'PIN_ARTICLE':
        //TODO: revisit because state is dict now
        return state.map(article =>
          article.id === action.id ? Object.assign({}, {id: article.id, pin: !article.pin}) : article
        )
      default:
        return state
    }
  }
  export default articles