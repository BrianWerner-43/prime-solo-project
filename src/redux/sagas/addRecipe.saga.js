import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addrecipe(action) {
    try {
      console.log('action.payload:', action.payload);
      const headers = {
            'Content-type': 'multipart/form-data'
        }
       const response = yield axios({
        method: 'POST',
        url: '/api/addRecipe',
        headers: headers,
        data: action.payload 
      });

      yield put({type: 'SAGA_GET_RECIPE'});
      console.log('Checking the SAGA/POST recipe:', response.data)
    } catch (error) {
        console.log('Error adding recipe:', error);
    }
}

function* addRecipeSaga() {
    yield takeLatest('SAGA/ADD_RECIPE', addrecipe)
}
export default addRecipeSaga;