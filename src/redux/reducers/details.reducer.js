const setDetailsReducer = (state = {}, action) => {
   switch (action.type) {
    case 'GET_DETAILS' :
        console.log('GET DETAILS!',action.payload)
        return action.payload;
    case 'EDIT_TITLE' :
        return {...state, title: action.payload}
    case 'EDIT_RECIPE':
        return {...state, description: action.payload}

    default:
        return state;
   } 
}

export default setDetailsReducer;