const historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return action.payload;
        case 'REMOVE_HISTORY_ITEM':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default historyReducer;