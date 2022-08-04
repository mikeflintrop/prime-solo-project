import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postDuration(action) {
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const duration = {duration: Number(action.payload)}
        console.log('action.payload in postDuration:', duration)

        yield axios.post('/api/history', duration, config);
        // yield put({type: 'POST_DURATION', payload: action.payload});
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
        // yield put({ type: 'SET_WORK_TIME', payload: response.data });
    } catch (error) {
        console.log('Error POSTing duration', error);
    }
}

function* newWorkoutSaga() {
    yield takeLatest('ADD_DURATION', postDuration);
}

export default newWorkoutSaga;
