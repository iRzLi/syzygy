
import { connect } from 'react-redux';
import ValidateEmailComponent from './validate_email';
import { validateEmail } from '../../actions/session_actions';


const msp = state => {
    return {
        
    };
};


const mdp = dispatch => {
    return {
        validateEmail: (token: string) => dispatch(validateEmail(token)),
    };
};


export default connect(msp, mdp)(ValidateEmailComponent);