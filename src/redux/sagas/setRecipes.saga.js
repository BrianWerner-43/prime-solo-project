import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Getiing the recipes for the user page
function* setUserPage(action) {
    try {
        const results = yield axios.get(`/api/details/${action.payload}`)
        yield put({type: "SET_RECIPES", payload: results.data})

    }catch (error) {
        console.log('Error fetching user recipes', error)
    }
}

function* getRecipesSaga() {
    yield takeLatest("SAGA_GET_RECIPES", setUserPage)
}

export default getRecipesSaga;