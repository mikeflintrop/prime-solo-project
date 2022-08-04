const numberSetsReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NUMBER_SETS':
            return action.payload; 
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default numberSetsReducer;