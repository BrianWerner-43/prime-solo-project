// Edit saga not using cloudinary

// import { put,takeLatest } from "redux-saga/effects";
// import axios from 'axios';

// function* editRecipe(action) {
//     console.log('action.payload:', action.payload);
//     try {
//         
//          const response = yield axios ({
//             method: 'PUT',
//             url:`api/addRecipe/edit/${action.payload.id}`,
//             data: action.payload.data
//         });
//         yield put({action: "SAGA_GET_RECIPE", payload: action.payload.id});
//         console.log('Checking the SAGA/PUT :', response.data)
//     } catch (error) {
//         console.log('Error with edit SAGA', error)
//     }
    
// }

// function* editRecipeSaga() {
//     yield takeLatest('SAGA/EDIT_RECIPE', editRecipe)
// }

// export default editRecipeSaga;


// EditPage.jsx working code without cloudinary on PUT route

// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';

//This page should allow a user to make edits to their recipes as well as changing the image
// function EditPage() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const {id} = useParams();
//     const user = useSelector((store) => store.user);
//     const recipe = useSelector((store) => store.setDetailsReducer)
    

    // useEffect(() => {
    //     dispatch({
    //         type: "SAGA_GET_DETAILS",
    //         payload: id
    //     })
    // }, [id])

    //will have to call to the saga to get the inforation from the server
    // const handleEdit = (event) => {
    //     event.preventDefault();
        
      // dispatch for the saga and useHistory to navigate back to the user page
    //     dispatch({
    //         type: 'SAGA/EDIT_RECIPE',
    //         payload: {
    //             id,
    //             data: recipe
    //         }
    //     })
    //     history.push('/user');

    // }
//     const setEditTitle = (title) => {
//         dispatch({
//             type: 'EDIT_TITLE',
//             payload: title
//         })
//     }
//     const setEditRecipe = (recipe) => {
//         dispatch({
//             type: 'EDIT_RECIPE',
//             payload: recipe
//         })
//     }

//     return (
//        <div className="container">
//         <h2>Edit your recipes here: {user.username}:</h2>
//         <form onSubmit={handleEdit}>
//             <input onChange={(event) => setEditTitle (event.target.value)}
//                     name="title"
//                     placeholder='Recipe Title'
//                     value={recipe.title}
//                     />

//             {/* <input onChange={(event) => setRecipeImage(event.target.files[0])}
//                    type="file"
//                    name='image'
//                    /> */}
//             <textarea onChange={(event) => setEditRecipe(event.target.value)}
//                    name="recipe"
//                    cols="30"
//                    rows="20"
//                    wrap="hard"
//                    placeholder="Add Recipe"
//                    value={recipe.description}
//                   />
//                   <br></br>
//             <button type="submit">Submit</button>
            
//         </form>
//        </div>
//     )

// }

// export default EditPage;

// Working addRecipe router without cloudinary on the PUT route

// router.put('/edit/:id', (req, res) => {
//     console.log('IN OUR PUT ROUTE---->', req.body);

    // const recipeTitle = req.body.title;
    // const userId = req.user.id
    // const recipeId = req.params.id
    // const recipeDescription = req.body.description
 
//     const sqlText = `
//     UPDATE "recipes"
//        SET "user_id"= $1, "title"= $2, "description"= $3
//        WHERE "id" = $4;`;
 
//     const updateRecipeValues = [ userId, recipeTitle, recipeDescription, recipeId, ]
 
//     // query to update the recipe image and recipe details
//     pool.query(sqlText, updateRecipeValues)
//     .then(result => {
//        console.log('PUT route working--->', result);
//        res.sendStatus(201)
//     }).catch((error) => {
//        console.log('Error in our PUT route:', error);
//        res.sendStatus(500);
//     })
//  })
 

// Working details reducer:

// const setDetailsReducer = (state = {}, action) => {
//     switch (action.type) {
//      case 'GET_DETAILS' :
//          console.log('GET DETAILS!',action.payload)
//          return action.payload;
//      case 'EDIT_TITLE' :
//          return {...state, title: action.payload}
//      case 'EDIT_RECIPE':
//          return {...state, description: action.payload}
 
//      default:
//          return state;
//     } 
//  }
 
//  export default setDetailsReducer;