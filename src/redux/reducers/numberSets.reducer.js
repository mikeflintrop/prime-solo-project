const numberSetsReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_NUMBER_SETS':
            return action.payload; 
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default numberSetsReducer;