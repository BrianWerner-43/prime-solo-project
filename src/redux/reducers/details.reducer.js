const setDetailsReducer = (state = {}, action) => {
   switch (action.type) {
    case 'GET_DETAILS' :
        console.log('GET DETAILS!',action.payload[0])
        return action.payload;
    default:
        return state;
   } 
}

export default setDetailsReducer;