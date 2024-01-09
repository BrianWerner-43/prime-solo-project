import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// This page will have 3 inputs:
// 1 for recipe name,
// 1 for an image
// A text box for the user to enter their recipe
// A submit button
function AddRecipe() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [title, setTitle] = useState('');
  const [image_url, setImage_url] = useState('');
  const [recipe, setRecipe] = useState('');

  //will have to call to the store for the saga and reducer
  const handleSubmit = (event) => {

  }

  return (
    <div className="inputs">
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => setTitle(event.target.value)}
             placeholder="Recipe Title"
             value={title}
             />
             <br></br>
      <input onChange={(event) => setImage_url(event.target.value)}
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