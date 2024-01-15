import { put,takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* editRecipe(action) {
    try {
        const headers = {
            'content-type' : 'multipart/form-data'
        }
        yield axios ({
            method: 'PUT',
            url:`api/addRecipe/edit/${action.payload.id}`,
            headers: headers,
            data: action.payload.data
        });
        yield put({payload: "SAGA_GET_RECIPE"});
        console.log('Checking the SAGA/PUT details:', response.data)
    } catch (error) {
        console.log('Error with edit SAGA', error)
    }
    
}

function* editRecipeSaga() {
    yield takeLatest('SAGA/EDIT_RECIPE', editRecipe)
}

export default editRecipeSaga;