import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


// This function that will handle the inputs for the user to be able 
// to add a new recipe with an image
function AddRecipe() {
  const dispatch = useDispatch();

  // const addRecipe = useSelector((store) => store.addRecipe);
  const formData = new FormData();
  const [title, setTitle] = useState('');
  const [image_url, setImage_url] = useState('');
  const [recipe, setRecipe] = useState('');
  
    

  //will have to call to the store for the saga and reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    formData.append('title', title);
    formData.append('image', image_url);
    formData.append('recipe', recipe);

    
    dispatch({
      type: 'SAGA/ADD_RECIPE',
      payload: formData
    })

  }

  return (
    <div className="inputs">
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => setTitle(event.target.value)}
             placeholder="Recipe Title"
             value={title}
             />
             <br></br>
      <input onChange={(event) => setImage_url(event.target.files[0])}
             type="file"
             placeholder="Add Image"
             value={image_url}
             />
             <br></br>
      <textarea onChange={(event) => setRecipe(event.target.value)}
             placeholder="Add Recipe"
             value={recipe}
             />
             <br></br>
      <button>Submit</button>
    </form>
    </div>
  )
}
export default AddRecipe;