import { combineReducers } from 'redux'
import search from './search'
import articles from './articles'

export default combineReducers({
    search,
    articles
})