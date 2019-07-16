import React from 'react';

class ValidateEmailComponent extends React.Component{

    constructor(props: any) {
        super(props);
        
    }

    componentDidMount(){
        this.props.validateEmail(this.props.match.params.validation_string)
            .then(
                (res: any)=>{
                    console.log("valid")
                },
                (err: any)=>{
                    console.log("bad link")
                }
            )
    }

    render(){
        return (
            <div>Validate</div>
        )
    }
}

export default ValidateEmailComponent;