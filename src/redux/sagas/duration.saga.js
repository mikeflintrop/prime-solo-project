import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// post duration to db
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
    } catch (error) {
        console.log('Error POSTing duration', error);
    }
}

function* newWorkoutSaga() {
    yield takeLatest('ADD_DURATION', postDuration);
}

export default newWorkoutSaga;
