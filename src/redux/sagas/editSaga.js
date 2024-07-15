import { put,takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* editRecipe(action) {
    try {
       console.log('Saga Edit action:', action)
        // console.log('action.payload is:', action.payload);
        const headers = {'Content-Type' : 'multipart/form-data'}

        //Explicitly specify headers for FormData if needed
      const response = yield axios({
        method: 'PUT',
        url: `/api/addRecipe/${action.payload.get('id')}`,
        headers: headers,
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

      
      
    
    
        

