const workTimeReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_WORK_TIME':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default workTimeReducer;