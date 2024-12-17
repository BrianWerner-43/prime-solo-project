import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    // clear any existing error on the login page
    yield put({ type: 'CLEAR_LOGIN_ERROR' });

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user 
    yield axios.post('/api/user/login', action.payload, config);//👈 line 18

    // after the user has logged in
    // get the user information from the server
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('Error with user login:', error.response ? error.response.data : error.message);// 👈 line 24
    // if (error.response.status === 401) { 👈 start of orginal code

    // 👉 This is some new code for trouble-shooting the login issue
      if (error.response) {
        console.log('error.response.data:', error.response.data)
      } else if (error.request) {
        console.log('error.request:', error.request)
      } else {
        console.log('Somrthing happened when setting up the request that triggered an error', error.message)
      }
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the username and password don't match in the database
      if (error.response && error.response.status === 401) {
      yield put({ type: 'LOGIN_FAILED' });
    } else {

    


    // } else { 👈 end of original code
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: 'LOGIN_FAILED_NO_CODE' });
    }
    }
  }
// }

// worker Saga: will be fired on "LOGOUT" actions
function* logoutUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session
    yield axios.post('/api/user/logout', config);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out

   
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* guestLogin() {
  try {
    yield put({ type: 'SET_GUEST_USER', guestLogin})
  } catch (error) {
    console.log('Error with guest login', error)
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
  yield takeLatest('GUEST_LOGIN', guestLogin);
}

export default loginSaga;
