const restTimeReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_REST_TIME':
            return action.payload; 
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default restTimeReducer;