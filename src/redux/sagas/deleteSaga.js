import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteRecipe(action) {
    try {
        // checking to see if the ID that was sent over
        // const id = action.payload;
        console.log('Making sure this is the id we are deleting:', action.payload);
        // sending a request to the database with the ID of the item was deleted
        yield axios.delete(`/api/recipe/${action.payload}`);
        // updating the DOM with another GET request 
        console.log('Checking to see what got deleted:',action.payload);
        yield put({type: 'SAGA_GET_RECIPE'});
    }catch(error) {
        console.log('Error deleting from deleteSaga:', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_RECIPE', deleteRecipe);
}

export default deleteSaga;