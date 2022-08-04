// hold only the single student object being edited
// payload: { property: 'github_name', value: event.target.value }
const editHistory = (state  = {}, action) => {
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