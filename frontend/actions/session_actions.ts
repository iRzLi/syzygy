import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const login = (form_user) => dispatch => {
    return SessionUtil.login(form_user)
        .then(
            res => dispatch(receiveCurrentUser(res))
        );
};

export const signup = (form_user) => dispatch => {
    return SessionUtil.signup(form_user)
        .then(
            res => dispatch(receiveCurrentUser(res))
        );
};

export const receiveCurrentUser = res => {
    return {
        type: RECEIVE_CURRENT_USER,
        res,
    };
};

export const validateEmail = (validation: string) => dispatch => {
    return SessionUtil.validateAccount(validation)
    // .then(
    //     res => dispatch(receiveCurrentUser(res))
    // );
}