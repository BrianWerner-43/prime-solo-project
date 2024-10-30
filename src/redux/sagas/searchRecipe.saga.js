import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipe(action) {
    try {
        const {query, number, offset} = action.payload;
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = yield call(axios.get, `/api/searchRecipe?q=${query}&number=${number}&offset=${offset}`);
        console.log('API Response:', response.data)

        yield put({ type: 'SET_SEARCH_RESULTS', payload:{results: response.data.results, totalResults: response.data.totalResults}});
    }catch (error) {
        console.log('Error fetching recipes from spoonacular API', error)
    }

}

function* searchRecipeSaga() {
    yield takeLatest('SAGA_SEARCH_RECIPES', fetchRecipe )
}

export default searchRecipeSaga;