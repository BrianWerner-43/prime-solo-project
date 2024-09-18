import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import deleteSaga from './deleteSaga';
import getRecipeSaga from './getRecipe.saga';
import searchRecipe from './searchRecipe.saga';
import setRecipesSaga from './setRecipes.saga';
import detailsSaga from './detailsSaga.saga'
import addRecipeSaga from './addRecipe.saga';
import editRecipeSaga from './editSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getRecipeSaga(),
    searchRecipe(),
    setRecipesSaga(),
    detailsSaga(),
    deleteSaga(),
    addRecipeSaga(),
    editRecipeSaga()
  ]);
}
