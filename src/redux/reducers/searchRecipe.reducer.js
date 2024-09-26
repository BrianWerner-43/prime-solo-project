const searchRecipe = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            console.log('Reducer invoked, setting the search results:', action.payload)
            const results = action.payload.results || [];
            return results.map(recipe => ({
                ...recipe,
                fullImagePath: `https://img.spoonacular.com/recipes/${recipe.id}-312x231.${recipe.imageType}`
            }));
        default:
            return state;
    }
};

export default searchRecipe;