import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';


// This page will display the users recipes
// They should be able to click on the recipe and be navigated to the recipe details page
function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const recipes = useSelector((store) => store.recipes);
  console.log('Checking for recipes!', recipes)

  useEffect(() => {
    dispatch({type: 'SAGA_GET_RECIPE'});
  }, []);

  // The handle click for the user to click on the recipe
  const handleRecipeClick = (recipeId) => {
    history.push(`/recipeDetails/${recipeId}`)
  };

  


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Here are you recipes!</p>
      {/* map over recipes to dispaly */}
      <ul>
        {recipes && recipes.map((recipe) => (
          <li key={recipe.id} onClick={() =>
          handleRecipeClick(recipe.id)}>
            <p>{recipe.title}</p>
          </li>
        ))}
      </ul>
      
    </div>



  );
}

// this allows us to use <App /> in index.js
export default UserPage;
