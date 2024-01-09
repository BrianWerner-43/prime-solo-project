const addRecipe = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return action.payload;
        default:
            return state;
    }
};

export default addRecipe;