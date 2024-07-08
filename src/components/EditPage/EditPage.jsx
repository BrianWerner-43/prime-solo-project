import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//This page should allow a user to make edits to their recipes as well as changing the image
function EditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [editTitle, setEditTitle] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);
    const [editRecipe, setEditRecipe] = useState('');
    const user = useSelector((store) => store.user);
    const recipe = useSelector((store) => store.setDetailsReducer)

    useEffect(() => {
        dispatch({
            type: "SAGA_GET_RECIPE",
            payload: params.id
        });
    }, [params, dispatch]);

    useEffect(() => {
        if(recipe) {
            setEditTitle(recipe.title)
            setEditRecipe(recipe.description)
        }
    }, [recipe])

    //will have to call to the saga to get the inforation from the server
    const handleEdit = (event) => {
        event.preventDefault();
        const recipeForm = new FormData();
        recipeForm.append("image", recipeImage) ;
        recipeForm.append('title', editTitle);
        recipeForm.append('description', editRecipe);
        recipeForm.append('id', params.id)

        
      // dispatch for the saga and useHistory to navigate back to the user page
      dispatch({
        type: 'SAGA/EDIT_RECIPE',
        payload: recipeForm,    
    }) 
     history.push('/user');

    };
    

    return (
       <div className="container">
        <h2>Edit your recipes here: {user.username}:</h2>
        <form onSubmit={handleEdit}>
            <input onChange={(event) => setEditTitle (event.target.value)}
                    name="title"
                    placeholder='Recipe Title'
                    value={editTitle}
                    />

            <input onChange={(event) => setRecipeImage(event.target.files[0])}
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