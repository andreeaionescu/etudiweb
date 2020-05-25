const articles = (state = {}, action) => {
    switch (action.type) {
      case 'RECEIVE_ARTICLES':
        return Object.assign({}, action.data)
      case 'RETRIEVE_FULL_TEXT':
        let id = action.data['pubmed_id']
        return Object.assign({}, state, {
          [id]: Object.assign({}, state[id], {'full_text': action.data['full_text'], 'pmc_id': action.data['pmc_id']})
        })
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