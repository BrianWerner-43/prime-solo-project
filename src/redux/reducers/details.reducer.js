const setDetailsReducer = (state = {}, action) => {
   switch (action.type) {
    case 'GET_DETAILS' :
        console.log('GET DETAILS!',action.payload)
        return action.payload;
    default:
        return state;
   } 
}

export default setDetailsReducer;