import store from '../store';

const URL = 'http://localhost:8888/pubmed'

export const searchArticles = text => ({
  type: 'SEARCH_ARTICLES',
  text
})

export const receiveArticles = articles => ({
  type: 'RECEIVE_ARTICLES',
  data: articles
})

export const retrieveFullTextById = data => ({
  type: 'RETRIEVE_FULL_TEXT',
  data
})

export const receiveError = err => ({
  type: 'RECEIVE_ERROR',
  err
})

export const fetchArticlesActionCreator = text => {
  store.dispatch(searchArticles(text));
  console.log('Searching for the following topic:', text)
  return function(dispatch, getState) {
    let headers = new Headers({'Content-Type': 'application/json'})
  
    let request = {
      method: 'POST',
      headers: headers,
      url: URL,
      body: JSON.stringify({'search': text}),
      mode: 'cors'
    }

    return fetch(URL, request)
    .then(response => response.json())
    .then(data => {
          dispatch(receiveArticles(data))
        })
    .catch(err => dispatch(receiveError(err)));

  };
};

export const fetchFullTextByIdActionCreator = pubmed_id => {
  console.log('Retrieveing article full text by pubmed_id:', pubmed_id)
  return function(dispatch, getState) {
    let headers = new Headers({'Content-Type': 'application/json'})
  
    let request = {
      method: 'POST',
      headers: headers,
      url: URL + `/${pubmed_id}`,
      body: JSON.stringify({'id': pubmed_id}),
      mode: 'cors'
    }

    return fetch(URL + `/${pubmed_id}`, request)
    .then(response => response.json())
    .then(data => {
          dispatch(retrieveFullTextById(data))
        })
    .catch(err => dispatch(receiveError(err)));

  };
};