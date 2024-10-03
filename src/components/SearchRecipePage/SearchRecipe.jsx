import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SearchRecipe.css';

// This will be the component for searching recipes using the spoonacular Api key
function SearchRecipe () {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [searchText, setSearchText] = useState('')
    const [offset, setOffset] = useState(0);
    const number = 50;
    const {results, totalResults} = useSelector((store) => store.searchRecipe);

    const handleSearch = (event) => {
        event.preventDefault();   
       if (searchText.trim()) {
        setQuery(searchText)
        setOffset(0);
        dispatch({type: 'SAGA_SEARCH_RECIPES', payload: {query: searchText, number, offset: 0}});
       }

        // This will be for clearing the text in the input
        setSearchText('')
    }

    const handlePageChange = (newOffset) => {
        setOffset(newOffset);
        dispatch({type: 'SAGA_SEARCH_RECIPES', payload: {query, number, offset: newOffset}})
    }

    return (
     <div className="wrapper">
        <h2>Search for your favorite recipes!</h2>
        <input
          className='search-input'
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search Recipes..."
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
        <div className='recipeCards'>
            {results.map((recipe) => (
                <div  key={recipe.id}>
                    <h3 className='recipeTitle'>{recipe.title}</h3>
                    <a href={recipe.sourceUrl}> 
                        <img src={recipe.fullImagePath} alt={recipe.title} />
                     </a>
                    <p>Click on an image to get the full recipe</p>
                </div>
            ))}
        </div>
        {/*This will be for the pagination controls, so that results will show up on each page */}
        <div className='pagination'>
            {offset > 0 && <button onClick={() => handlePageChange(offset - number)}>Previous</button>}
            {offset + number < totalResults && <button onClick={() => handlePageChange(offset + number)}>Next</button>}
       </div>  
     </div>
    )


}

export default SearchRecipe;