const search = (state = {base: ''}, action) => {
    switch(action.type){
        case 'SEARCH_ARTICLES':
            return Object.assign({}, state, {base: action.text})
        default:
            return state
    }
}