import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Saga to fetch individual recipe details
function* recipeDetails(action) {
    try {
        const results = yield axios.get(`/api/details/${action.payload}`);
        console.log('Fetching the recipe details:', results.data);
        yield put({ type: 'GET_DETAILS', payload: results.data })
    }catch(error) {
        console.log('Error with fetching the recipe details:', error);
    }
}

function* recipeDetailsSaga() {
    yield takeLatest( "SAGA_GET_DETAILS", recipeDetails)
}

export default recipeDetailsSaga;