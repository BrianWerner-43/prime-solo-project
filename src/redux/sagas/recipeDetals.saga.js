import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Getting the recipe details for the details page

function* setDetailsPage(action) {
    console.log('In recipe details page', action.payload)
    try {
        const details = yield axios.get(`/api/recipeItem/${action.payload}`)
        console.log('looking for recipe info data', details.data)
        yield put({type: "GET_DETAILS", payload: details.data});
    }catch {
        console.log('Error with the details GET');
    }
}

function* getDetailsSaga() {
    yield takeLatest("SAGA_GET_DETAILS", setDetailsPage)
}

export default getDetailsSaga;