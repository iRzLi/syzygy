import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

interface TypedProps { }

interface TypedState {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}


class SignupComponent extends React.Component<TypedState>{
    state: TypedState;

    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(field: string) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(
            () => this.props.history.push("/splash")
        );

        this.setState({
            email: "",
            first_name: "",
            last_name: "",
            password: "",
        });
    }

    // componentDidUpdate() {
    //     console.log(this.props)
    //     console.log(this.state)
    // }

    render() {
        return (
            <div className="session-form-container">
                <div className="form-header text-white background-blue">Sign Up</div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label className="input-label text-blue">First Name</label>
                    <input className="input-field" type="text" 
                    value={this.state.first_name} 
                    onChange={this.handleOnChange("first_name")} 
                    placeholder="First Name" />
                    

                    <label className="input-label text-blue">Last Name</label>
                    <input className="input-field" type="text" 
                    value={this.state.last_name} 
                    onChange={this.handleOnChange("last_name")} 
                    placeholder="Last Name"/>
                    

                    <label className="input-label text-blue">Email</label>
                    <input className="input-field" type="email" 
                    value={this.state.email} 
                    onChange={this.handleOnChange("email")} 
                    placeholder="Email" />
                    

                    <label className="input-label text-blue">Password</label>
                    <input className="input-field" type="password" 
                    value={this.state.password} 
                    onChange={this.handleOnChange("password")} 
                    placeholder="Password"/>
                    
                    <input className="input-submit background-orange text-white" type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}


export default SignupComponent;