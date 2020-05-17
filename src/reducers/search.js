const search = (state = '', action) => {
    switch(action.type){
        case 'SEARCH_ARTICLES':
            return action.text
        default:
            return state
    }
}
export default search