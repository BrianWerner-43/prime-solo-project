import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipe(action) {
    try {

        const headers = {
            'Content-Type': 'application/json'
        }
        const response = yield call(axios.get, `/api/searchRecipe?q=${action.payload}`);
       

        yield put({ type: 'SET_SEARCH_RESULTS', payload: response.data});
    }catch (error) {
        console.log('Error fetchin recipes from spoonacular API', error)
    }

}

function* searchRecipeSaga() {
    yield takeLatest('SAGA_SEARCH_RECIPES', fetchRecipe )
}

export default searchRecipeSaga;