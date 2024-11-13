import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';


//This page should allow a user to make edits to their recipes as well as changing the image
function EditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const [editTitle, setEditTitle] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);
    const [editDescription, setEditDescription] = useState('');
    const [editIngredients, setEditIngredients] = useState('');
    const [editProcedure, setEditProcedure] = useState('');
    const user = useSelector((store) => store.user);
    const recipe = useSelector((store) => store.setDetailsReducer)

    useEffect(() => {
        dispatch({
            type: "SAGA/EDIT_RECIPE",
            payload: id
        });
    }, [id, dispatch]);

    useEffect(() => {
        if(recipe) {
            setEditTitle(recipe.title)
            setRecipeImage(recipe.image_url)
            setEditDescription(recipe.description)
            setEditIngredients(recipe.ingredients)
            setEditProcedure(recipe.procedure)
        }
    }, [recipe])

    //will have to call to the saga to get the inforation from the server
    const handleEdit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image_url", recipeImage);
        formData.append('title', editTitle);
        formData.append('description', editDescription);
        formData.append('ingredients', editIngredients)
        formData.append('procedure', editProcedure);
        formData.append('id', id);

        
      // dispatch for the saga and useHistory to navigate back to the user page
      dispatch({
        type: 'SAGA/EDIT_RECIPE',
        payload: formData,    
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
                    <br />
            <input onChange={(event) => setRecipeImage(event.target.files[0])}
                   type="file"
                   name='image'
                   placeholder='Recipe Image'
                   files={recipeImage}
                   />
                   <br></br>
            <textarea onChange={(event) => setEditDescription(event.target.value)}
                   className='descriptionInput'
                   name="recipe"
                   cols="15"
                   rows="4"
                   wrap="hard"
                   placeholder="Edit Description"
                   value={editDescription}
                  />
                  <br></br>
             <textarea onChange={(event) => setEditIngredients(event.target.value)}
                   className='ingredientInput'
                   name="recipe"
                   cols="30"
                   rows="20"
                   wrap="hard"
                   placeholder="Edit Ingridents"
                   value={editIngredients}
                  />
                  <br></br>
            <textarea onChange={(event) => setEditProcedure(event.target.value)}
                     className='procedureInput'
                    name="procedure"
                    cols="30"
                    rows="20"
                    wrap="hard"
                    placeholder='Edit procedure'
                    value={editProcedure}
                    />
                    <br></br>
            <Button onClick={() => history.goBack()} 
            variant='contained' 
            size='small' 
            style={{marginTop: '1px', 
            padding: '2px',
            paddingTop: '0', 
            paddingBottom: '0',
            marginRight: '5px', 
            backgroundColor: 'rgb(222 20 20)', 
            border: '2px solid', 
            borderRadius: '20px', 
            color: 'black' }}>
                prev
            </Button>
            <button className='submitBtn' type="submit">Submit</button>
        </form>
       </div>
    )

}

export default EditPage;