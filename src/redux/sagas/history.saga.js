import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// get all history from db
function* fetchHistory(action) {
    console.log('fetchHistory:', action.payload);
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const id = action.payload;
        const response = yield axios.get(`/api/history/${id}`, config);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        console.log('get history:', action.payload);
        yield put({ type: 'SET_HISTORY', payload: response.data });

    } catch {
        console.log('get history error');
    }
};

function* historySaga() {
    yield takeLatest('FETCH_HISTORY', fetchHistory);
}

export default historySaga;