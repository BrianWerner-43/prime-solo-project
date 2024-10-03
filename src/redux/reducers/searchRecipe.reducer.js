
const initialState = {
    results: [],
    totalResults: 0
}


const searchRecipe = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            console.log('Reducer invoked, setting the search results:', action.payload)
            return {
                results: action.payload.results.map(recipe => ({
                    ...recipe,
                    fullImagePath: `https://img.spoonacular.com/recipes/${recipe.id}-312x231.${recipe.imageType}`
                })),
                totalResults: action.payload.totalResults
            }
        default:
            return state;
    }
};

export default searchRecipe;