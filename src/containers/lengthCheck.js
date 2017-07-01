import React, { Component } from 'react';

class LengthCheck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valid: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pw.length > 8) {
            this.setState({ valid: true });
        }
    }
    render() {
        return ( this.state.valid === false ? this.returnNotValidMsg() : this.returnValidMsg() );
    }
    returnNotValidMsg() {
        return (
            <li className='text-left invalid'><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Password must be more than 8 characters.</li>
        );
    }
    returnValidMsg() {
        return (
            <li className='text-left valid'><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> Password must be more than 8 characters.</li>
        );
    }
}

export default LengthCheck;