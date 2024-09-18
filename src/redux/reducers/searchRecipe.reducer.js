const searchRecipe = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return action.payload.results.map(recipe => ({
                ...recipe,
                fullImagePath: `https://img.spoonacular.com/recipes_100X100.jpeg/${recipe.image}`
            }));
        default:
            return state;
    }

}

export default searchRecipe;