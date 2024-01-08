import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './RecipeDetails.css';


// Creating a function that will display the recipe and recipe detals
function RecipeDetails() {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();
  const details = useSelector(store => store.setDetailsReducer);
  const recipe = useSelector(store => store.setRecipes)

  // Delete function
  const handleDelete = () => {
    
    dispatch({
      type: 'DELETE_RECIPE',
      payload: details.id
    })
    history.push('/');

  };

  // Edit function that when clicked it will bring the user to the edit recipe page
  // also use a modal to give the user the option if they want to delete recipe or not
  const handleEditBtn = (id) => {
    history.push(`/edit/${id}`)
    
  };

  //Add button that when clicked it will bring the user to the add recipe page
  const handleAddBtn = () => {
    history.push('/addRecipe')
  }

// Sending a call to the store to retrieve the recipe details for the user
  
  useEffect(() =>{
    console.log('Expect to get the ids:', ID);
    dispatch({
      type: "SAGA_GET_DETAILS",
      payload: ID.id  
    })
    
  }, [])
  

  return (
  <div className="container">
    <div>
      
      <img src={details.image_url} />
      <h1>{details.title}</h1>
      <h2>Method:</h2>
      <p>{details.description}</p>

      <button className="back-btn" onClick={() => history.goBack()}>👈</button>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
      <button className="edit-btn"  onClick={handleEditBtn}>Edit</button>
      <button className="add-btn" onClick={handleAddBtn}>Add Recipe</button>
      
     </div>
    </div>
  )
  


    

}

export default RecipeDetails;