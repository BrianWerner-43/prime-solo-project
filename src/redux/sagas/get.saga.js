import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipe() {
    try{
        const recipe = yield axios.get(`/recipe`);
        yield put({type: 'SET_RECIPE', payload: recipe});
    } catch(error) {
        console.log('Error with GET in Saga', error);
    }
}

function* getSaga() {
    yield takeLatest('SAGA_GET_RECIPE', getRecipe);
}

export default getSaga;