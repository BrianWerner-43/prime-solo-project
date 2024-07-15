import { put,takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* editRecipe(action) {
    try {
        console.log('action.payload is:', action.payload);
        const headers = {'content-type' : 'multipart/form-data'}

        //Explicitly specify headers for FormData if needed
      const response = yield axios({
        method: 'PUT',
        url: `/api/recipe/${action.payload.get('id')}`,
        headers: editHeaders,
        data: action.payload
      });
     yield put({
      type: 'SAGA_GET_RECIPE',
      // payload: response.data
     })
  } catch(error) {
    console.log('error with the editRecipe saga:', error)
  }

}
  function* editRecipeSaga() {
    yield takeLatest('SAGA/EDIT_RECIPE', editRecipe)
 }

export default editRecipeSaga;

        // Creating some variables to hold what come in on action.payload:
        // const recipeId = action.payload.id
        // const title = action.payload.data.editTitle
        // const recipe = action.payload.data.editRecipe
        // const image = action.payload.data.recipeImage

        // Creating an editUrl variable that holds the correct url to hit if a user
        // has not edited the image and also make an editData variable that
        // contains the action.payload.data object

        // let editUrl = `/api/addrecipe/${recipeId}`
        // let editData = {title, recipe}
        // let editHeaders = ''

      // Then, IF the FormData object includes an 'image' property,
      // we'll set editUrl to hold the different URL. We'll also
      // make a chunk of FormData and set editData to hold it. 
      // if (action.payload.data.image) {
      //   editUrl = `/api/addRecipe/${recipeId}/image_edit`

      //   const formData = new FormData();
      //   formData.append('title', title);
      //   formData.append('recipe', recipe);
      //   formData.append('image', image);

      //   editData = formData

      //   editHeaders = {
      //       'content-type' : 'multipart/form-data'
      //   }
      // }

      
    
    
        

