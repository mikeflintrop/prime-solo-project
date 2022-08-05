const editHistoryReducer = (state  = {}, action) => {
    if(action.type === 'SET_EDIT_HISTORY') {
        // action.payload is object from database
        return action.payload;
    } else if (action.type === 'EDIT_ONCHANGE') {
        return {
            // spread - give me all of the object 
            ...state,
            // change this one in particular
            [action.payload.property]: action.payload.value
        }
    } else if (action.type === 'EDIT_CLEAR') {
        return {notes: ''};
    }

    return state;
}

// user will be on the redux state at:
// state.user
export default editHistoryReducer;