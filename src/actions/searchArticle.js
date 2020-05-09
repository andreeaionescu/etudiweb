import axios from 'axios';
import store from '../store';

export const searchArticles = text => ({
  type: 'SEARCH_ARTICLES',
  text
})

export const receiveArticles = articles => ({
  type: 'RECEIVE_ARTICLES',
  data: articles
})

export const receiveError = err => ({
  type: 'RECEIVE_ERROR',
  err
})

export const fetchArticlesActionCreator = text => {
  store.dispatch(searchArticles(text));
  console.log(text)
  return function(dispatch, getState) {
    return axios.post('https://localhost:8888/pubmed/', {'search': text})
      .then(data => {
        console.log(data) 
        data.json()
      }
      )
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('No data found!!');
        } 
        else dispatch(receiveArticles(data));
      })
      .catch(err => dispatch(receiveError(data)));
  };
};