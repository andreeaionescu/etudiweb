import { combineReducers } from 'redux'
import search from 'reducers/search'
import articles from 'reducers/articles'

export default combineReducers({
    search,
    articles
})