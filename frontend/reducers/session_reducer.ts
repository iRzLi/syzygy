import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const sessionReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.res.user.id };
        default:
            return oldState;
    }
};

export default sessionReducer;