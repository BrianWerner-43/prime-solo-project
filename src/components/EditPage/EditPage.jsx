import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//This page should allow a user to make edits to their recipes as well as changing the image
function EditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const formData = new FormData();
    const [editTitle, setEditTitle] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [editRecipe, setEditRecipe] = useState('');

    //will have to call to the saga to get the inforation from the server
    const handleEdit = (event) => {
        event.preventDefault();
        if(recipeImage === '') {
            formData.append('image_url')
        } 
        else {
            formData.append('image', recipeImage[0])
        }   
        formData.append('title', editTitle);
        formData.append('recipe', editRecipe);
      // dispatch for the saga and useHistory to navigate back to the user page

    }

    return (
       <div className="container">
        <h2>Edit your recipes here:</h2>
        <form onSubmit={handleEdit}>
            <input onChange={(event) => setEditTitle(event.target.value)}
                    name="title"
                    placeholder='Recipe Title'
                    value={editTitle}
                    />

            <input onChange={(event) => setRecipeImage(event.target.files)}
                   type="file"
                   name='image'
                   />
            <textarea onChange={(event) => setEditRecipe(event.target.value)}
                   name="recipe"
                   cols="30"
                   rows="20"
                   wrap="hard"
                   placeholder="Add Recipe"
                   value={editRecipe}
                  />
                  <br></br>
            <button type="submit">Submit</button>
            
        </form>
       </div>
    )

}

export default EditPage;