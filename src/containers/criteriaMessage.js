import React, { Component } from 'react';

class CriteriaMessage extends Component {
    render() {
        return ( this.props.valid === false ? this.returnNotValidMsg() : this.returnValidMsg() );
    }
    returnNotValidMsg() {
        return (
            <li className='text-left invalid'><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> {this.props.msg}</li>
        );
    }
    returnValidMsg() {
        return (
            <li className='text-left valid'><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> {this.props.msg}</li>
        );
    }
}

export default CriteriaMessage;