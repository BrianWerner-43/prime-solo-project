import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// This is for styling the recipe cards using MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { cyan } from '@mui/material/colors';


import './SearchRecipe.css';

// This will be the component for searching recipes using the spoonacular Api key
function SearchRecipe () {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const number = 25;
    const {results, totalResults} = useSelector((store) => store.searchRecipe);
    const color = cyan[600]


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

      // This is for getting the correct value of results per page load
    const handlePageChange = (event, value) => {
        setPage(value);
        const newOffset = (value -1)
        dispatch({type: 'SAGA_SEARCH_RECIPES', payload: {query, number, offset: newOffset}})

    }

    // This will be for calculating the total number of pages/rendering # of reults per page
    const totalPages = Math.round(totalResults / number);

    return (
     <div className="wrapper">
        <Typography variant='h3' className='searchHeader' fontFamily='Noconsequence' gutterBottom>
            Search for your favorite recipes!
        </Typography>
        <Typography variant='body2' color='Secondary' gutterBottom>
            * Note that links without images are broken
        </Typography>
        {/* <h2>Search for your favorite recipes!</h2>      */}
        {/* <p>* Note that links without images are broken</p> */}
          <div className='search-bar'>
            <TextField
              className='serach-input'
              label='Search Recipes...'
              variant='outlined'
              size='small'
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              />
              <Button className='search-btn' 
                      onClick={handleSearch} 
                      variant='contained' 
                      color='primary'>Search
              </Button>
       </div>
       <div className='recipeCards'>
         {results.map((recipe) => (
            <Card sx={{border: 2, borderColor: 'black'}} key={recipe.id} className='recipeCard'>
                <CardMedia
                  component='img'
                  alt={recipe.title}
                  height='140'
                  src={recipe.fullImagePath}
                  className='recipeImage'
                />
                <CardContent>
                    <Typography varient='h6' component='h3' fontFamily='Noconsequence' className='recipeTitle'>
                        {recipe.title}
                    </Typography>
                    <Typography  fontFamily='Noconsequence' variant='body2' component='p'>
                        <a href={recipe.sourceUrl} style={{ color }}>Click here to get the full recipe</a>    
                    </Typography>
                </CardContent>
            </Card>
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
        {/* <div className='recipeCards'>
            {results.map((recipe) => (
                <div  key={recipe.id}>
                    <h3 className='recipeTitle'>{recipe.title}</h3>
                    <a href={recipe.sourceUrl}> 
                        <img src={recipe.fullImagePath} alt={recipe.title} />
                     </a>
                    <p>Click on an image to get the full recipe</p>
                </div>
            ))}
        </div> */}
        {/* <div className='pagination'>
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
       </div>   */}
     </div>
    )


}

export default SearchRecipe;