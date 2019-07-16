
import { connect } from 'react-redux';
import SignupComponent from './signup';
import { signup } from '../../actions/session_actions';

// const msp = state => {
//     return {
//         formType: "Signup",
//         errors: state.errors.session,
//     };
// };


const mdp = dispatch => {
    return {
        processForm: (userForm) => dispatch(signup(userForm)),
    };
};


export default connect(null, mdp)(SignupComponent);