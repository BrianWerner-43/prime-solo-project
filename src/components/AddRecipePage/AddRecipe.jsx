import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './AddRecipe.css';


// This function that will handle the inputs for the user to be able 
// to add a new recipe with an image
function AddRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const formData = new FormData();
  const [title, setTitle] = useState('');
  const [image_url, setImage_url] = useState([]);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [procedure, setProcedure] = useState('');
  
    

  //will have to call to the store for the saga and reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    formData.append('image', image_url[0]);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('procedure', procedure);
   

    
    dispatch({
      type: 'SAGA/ADD_RECIPE',
      payload: formData
    })
    history.push('/user');

  }
  

  return (
    <div className="container">
      <h2>Add Your favorite recipes {user.username}!</h2>
    <form onSubmit={handleSubmit}>
      <input className='recipe-title' onChange={(event) => setTitle(event.target.value)}
            name="title"
            placeholder="Recipe Title"
            value={title}
            // type='text'
             />
             <br></br>

      <input className='url-input' onChange={(event) => setImage_url(event.target.files)}
             type="file"
             name='image'
             />
             <br></br>

      <input className='description-input' onChange={(event) => setDescription(event.target.value)}
             name="description"
             placeholder='Description'
             value={description}
             />
             <br></br>

      <textarea className='ingredient-input' onChange={(event) => setIngredients(event.target.value)}
            name="recipe"
            cols="30"
            rows="10"
            wrap="hard"
            placeholder="Ingredients"
            value={ingredients}
             />
             <br></br>
      <textarea className='procedure-input' onChange={(event) => setProcedure(event.target.value)}
            name="procedure"
            cols="30"
            rows="10"
            placeholder='Procedure'
            value={procedure}
            />
        
      <button className='submit-btn' type="submit">Submit</button>
    </form>
    </div>
    
  )
}
export default AddRecipe;