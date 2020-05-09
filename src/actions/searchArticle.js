
import store from "../store";

export const searchArticles = text => ({
  type: 'SEARCH_ARTICLES',
  text
})

export const receiveArticles = articles => ({
  type: 'RECEIVE_ARTICLES',
  data: articles
})

export const fetchArticlesActionCreator = text => {
  store.dispatch(searchArticles(text));
  console.log(text)
  return function(dispatch, getState) {
    return fetch(`https://api.github.com/users/${text}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No data found!!");
        } 
        else dispatch(receiveArticles(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};