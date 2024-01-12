import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//This page should allow a user to make edits to their recipes as well as changing the image
function EditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const formData = new FormData();
    const [editTitle, setEditTitle] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [editImage_url, setEditImage_url] = useState([]);
    const [editRecipe, setEditRecipe] = useState('');

    //will have to call to the saga to get the inforation from the server
    const handleEdit = (event) => {
        event.preventDefault();
        if(recipeImage === '') {
            
        }    
        formData.append('image', editImage_url[0]);
        formData.append('title', editTitle);
        formData.append('recipe', editRecipe);


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

            {/* <input  */}
        </form>
       </div>
    )

}

export default EditPage;