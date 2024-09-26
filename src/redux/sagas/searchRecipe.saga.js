import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipe(action) {
    try {

        const headers = {
            'Content-Type': 'application/json'
        }
        const response = yield call(axios.get, `/api/searchRecipe?q=${action.payload}`);
        console.log('API Response:', response.data)

        const resultsPayload = response.data.results || [];
        console.log('Extracted Results payload:', resultsPayload)

        yield put({ type: 'SET_SEARCH_RESULTS', payload:{results: resultsPayload}});
    }catch (error) {
        console.log('Error fetching recipes from spoonacular API', error)
    }

}

function* searchRecipeSaga() {
    yield takeLatest('SAGA_SEARCH_RECIPES', fetchRecipe )
}

export default searchRecipeSaga;