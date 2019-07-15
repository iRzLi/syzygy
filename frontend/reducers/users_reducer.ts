import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        default:
            return oldState;
    }
};

export default usersReducer;