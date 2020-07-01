import { combineReducers } from 'redux'
import search from './search.js'
import articles from './articles.js'

export default combineReducers({
    search,
    articles
})