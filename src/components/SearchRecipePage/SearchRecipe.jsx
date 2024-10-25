import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './SearchRecipe.css';

// This will be the component for searching recipes using the spoonacular Api key
function SearchRecipe () {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const number = 50;
    const {results, totalResults} = useSelector((store) => store.searchRecipe);

    const handleSearch = (event) => {
        event.preventDefault();   
       if (searchText.trim()) {
        setQuery(searchText)
        setPage(1)
        dispatch({type: 'SAGA_SEARCH_RECIPES', payload: {query: searchText, number, offset: 0}});
       }

        // This will be for clearing the text in the input
        setSearchText('')
    }

      // This is for getting the coorect value of results per page load
    const handlePageChange = (event, value) => {
        setPage(value);
        const newOffset = (value -1)
        dispatch({type: 'SAGA_SEARCH_RECIPES', payload: {query, number, offset: newOffset}})

    }

    // This will be for calculating the total number of pages
    const totalPages = Math.round(totalResults / number);

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
        <div className='pagination'>
            <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  size='large'
                  page={page}
                  onChange={handlePageChange}
                  variant='outlined'
                  color='primary'
                  />
            </Stack>
       </div>  
     </div>
    )


}

export default SearchRecipe;