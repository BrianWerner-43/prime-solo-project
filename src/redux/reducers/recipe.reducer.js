
const recipeReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_RECIPE':
            return action.payload;
        default:
            return state;
    }
};


export default recipeReducer;