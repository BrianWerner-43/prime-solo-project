import { put,takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* editRecipe(action) {
    console.log('action.payload:', action.payload);
    try {
        // const headers = {
        //     'content-type' : 'multipart/form-data'
        // }
         const response = yield axios ({
            method: 'PUT',
            url:`api/addRecipe/edit/${action.payload.id}`,
            // headers: headers,
            data: action.payload.data
        });
        yield put({action: "SAGA_GET_RECIPE", payload: action.payload.id});
        console.log('Checking the SAGA/PUT :', response.data)
    } catch (error) {
        console.log('Error with edit SAGA', error)
    }
    
}

function* editRecipeSaga() {
    yield takeLatest('SAGA/EDIT_RECIPE', editRecipe)
}

export default editRecipeSaga;