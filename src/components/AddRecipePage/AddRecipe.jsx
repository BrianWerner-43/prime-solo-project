import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


// This function that will handle the inputs for the user to be able 
// to add a new recipe with an image
function AddRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  // const addRecipe = useSelector((store) => store.addRecipe);
  const formData = new FormData();
  const [title, setTitle] = useState('');
  const [image_url, setImage_url] = useState([]);
  const [recipe, setRecipe] = useState('');
  
    

  //will have to call to the store for the saga and reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    formData.append('image', image_url[0]);
    formData.append('title', title);
    formData.append('recipe', recipe);

    
    dispatch({
      type: 'SAGA/ADD_RECIPE',
      payload: formData
    })
    history.push('/user');

  }

  return (
    <div className="container">
      <h2>Add Your favorite recipes!</h2>
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => setTitle(event.target.value)}
            name="title"
             placeholder="Recipe Title"
             value={title}
             autoComplete='title'
             />
             <br></br>
      <input onChange={(event) => setImage_url(event.target.files)}
             type="file"
             name='image'
             
             />
             <br></br>
      <textarea onChange={(event) => setRecipe(event.target.value)}
            name="recipe"
             placeholder="Add Recipe"
             value={recipe}
             autoComplete='recipe'
             />
             <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
    
  )
}
export default AddRecipe;