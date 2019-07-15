const sessionReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        default:
            return oldState;
    }
};

export default sessionReducer;