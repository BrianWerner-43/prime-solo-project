import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This will be the component for searching recipes using the spoonacular Api key
function SearchRecipe () {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const searchResults = useSelector((store) => store.searchRecipe || []);

    const handleSearch = (event) => {
        event.preventDefault('');
        dispatch({ type: 'SAGA_SEARCH_RECIPES', payload: query})
    }

    return (
     <>
        <h2>Search for your favorite recipes!</h2>
        <input
          className='search-input'
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search Recipes..."
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
        <div>
            {searchResults.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.fullImagePath} alt={recipe.title} />
                    <p>{recipe.summary}</p>
                </div>
            ))}
        </div>  
     </>
    )


}

export default SearchRecipe;