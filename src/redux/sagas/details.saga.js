import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Getiing the information for the details page
function* setDetailsPage(action) {
    try {
        const results = yield axios.get(`/api/details/${action.payload}`)
        yield put({type: "SET_DETAILS", payload: results.data[0]})

    }catch {
        console.log('Error with details in GET/saga')
    }
}

function* detailsSaga() {
    yield takeLatest("SAGA_GET_DETAILS", setDetailsPage)
}

export default detailsSaga;