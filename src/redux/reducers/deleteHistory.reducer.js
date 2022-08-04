const deleteHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_HISTORY_ITEM':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default deleteHistoryReducer;