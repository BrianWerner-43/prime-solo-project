

import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipe() {
    try{
        // using select to retrieve the user ID from the store
       
        const user_id = yield select((store) => store.user.id)
        console.log('user.id', user_id);
        // Passing userId as a route parameter that retrieves information for a specific user
        const recipeResponse = yield axios.get(`/api/recipe/${user_id}`);
        // console.log('Recipe data', recipeResponse.data);
        yield put({type: 'GET_RECIPE', payload: recipeResponse.data});
       
    } catch(error) {
        console.log('Error with GET in Saga', error);
    }
}

function* getSaga() {
    yield takeLatest('SAGA_GET_RECIPE', getRecipe);
}

export default getSaga;