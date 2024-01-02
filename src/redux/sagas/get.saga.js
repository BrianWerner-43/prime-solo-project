import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipe() {
    try{
        // using select to retrieve the user ID from the store
        const userId = select((store) => store.user.id)
        // Passing userId as a route parameter that retrieves information for a specific user
        const recipe = yield axios.get(`/recipe/${userId}`);
        yield put({type: 'SET_RECIPE', payload: recipe.data});
    } catch(error) {
        console.log('Error with GET in Saga', error);
    }
}

function* getSaga() {
    yield takeLatest('SAGA_GET_RECIPE', getRecipe);
}

export default getSaga;