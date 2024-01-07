const setDetailsReducer = (state = {}, action) => {
   switch (action.type) {
    case 'GET_DETAILS' :
        return action.payload;
    default:
        return state;
   } 
}

export default setDetailsReducer;