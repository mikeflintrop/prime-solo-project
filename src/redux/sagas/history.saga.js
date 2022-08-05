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
        // console.log('get history:', action.payload);
        const id = action.payload;
        const response = yield axios.get(`/api/history`, config);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_HISTORY', payload: response.data });

    } catch(error) {
        console.log('get history error', error);
    }
};

function* deleteHistoryItem(action) {
    console.log('this is action', action.payload);
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };
        yield axios.delete(`/api/history/${action.payload}`, config)
        yield put({type: 'REMOVE_HISTORY_ITEM'});
    }
    catch (error) {
        console.log('item to be deleted', error);
    }
}

// function* updateHistoryItem(action) {
//     console.log('this is action', action.payload);
//     try {
//         const config = {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//         };
//         yield axios.put(`/api/history/${action.payload}`, config)
//         yield put({type: 'EDIT_HISTORY_ITEM'});
//     }
//     catch (error) {
//         console.log('item to be edited', error);
//     }
// }

function* historySaga() {
    yield takeLatest('FETCH_HISTORY', fetchHistory);
    yield takeLatest('DELETE_HISTORY_ITEM', deleteHistoryItem);
    // yield takeLatest('UPDATE_HISTORY_ITEM', updateHistoryItem);
}

export default historySaga;