import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addrecipe(action) {
    try {
      const headers = {
            'content-type': 'multipart/form-data'
        }
      const response = yield axios({
        method: 'POST',
        url: '/api/addRecipe',
        headers: headers,
        data: action.payload 
      });
      


    } catch (error) {
        console.log('Error adding recipe:', error);
    }
}

function* addRecipeSaga() {
    yield takeLatest('SAGA/ADD_RECIPE', addrecipe)
}
export default addRecipeSaga;