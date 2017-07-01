import React, { Component } from 'react';
import './App.css';
import CriteriaMessage from './containers/criteriaMessage.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: 'signUp',
      username: '',
      pw: '',
      pwConfirm: '',
      lengthCheck: false,
      lettersNumbersCheck: false,
      uppercaseCheck: false,
      specialCharCheck: false,
      pwMatchCheck: false,
      formValid: false
    }
  }

  pwUpdate(pw) {
    this.lengthCheck(pw);
    this.lettersNumbersCheck(pw);
    this.uppercaseCheck(pw);
    this.specialCharCheck(pw);
    this.setState({ pw });
  }

  pwConfirmUpdate(pwConfirm) {
    this.pwMatchCheck(pwConfirm);
    this.setState({ pwConfirm });
  }

  lengthCheck(pw) {
    if (pw.length > 8) {
        this.setState({ lengthCheck: true });
    } else {
        this.setState({ lengthCheck: false });
    }
  }

  uppercaseCheck(pw) {
    let uppercase = pw.match(/[A-Z]/);
    if (uppercase) {
      this.setState({ uppercaseCheck: true });
    } else {
      this.setState({ uppercaseCheck: false });
    }
  }

  lettersNumbersCheck(pw) {
    let letters = pw.match(/[a-zA-Z]/);
    let numbers = pw.match(/[0-9]/);
    if (letters && numbers) {
      this.setState({ lettersNumbersCheck: true })
    } else {
      this.setState({ lettersNumbersCheck: false })
    }
  }

  specialCharCheck(pw) {
    let specialChar = pw.match(/[!@#$%^&*)(+=._-]/);
    if (specialChar) {
      this.setState({ specialCharCheck: true });
    } else {
      this.setState({ specialCharCheck: false });
    }
  }

  pwMatchCheck(pwConfirm) {
    if (this.state.pw === pwConfirm) {
      this.setState({  pwMatchCheck: true });
    } else {
      this.setState({ pwMatchCheck: false });
    }
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2 className="header">Create a New Account</h2>
            <p className="sub-header">Already a member? <a className="login">Login</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <form>
              <div className="form-group">
                <input 
                  value={this.state.username}
                  onChange={event => this.setState({username: event.target.value})}
                  type="text" 
                  className="form-control" 
                  placeholder="Username or Email" />
              </div>
              <div className="form-group">
                <input 
                  value={this.state.pw}
                  onChange={event => this.pwUpdate(event.target.value)}
                  type="pasword" 
                  className="form-control" 
                  placeholder="New Password" />
              </div>
              <div className="form-group">
                <input 
                  value={this.state.pwConfirm}
                  onChange={event => this.pwConfirmUpdate(event.target.value)}
                  type="pasword" 
                  className="form-control"
                  placeholder="Re-enter Password" />
              </div>
              <button type="submit" className='btn btn-success btn-block' >Create Account</button> 
            </form>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3>Password Criteria</h3>
                <ul>
                  <CriteriaMessage valid={this.state.lengthCheck} msg='Password must be more than 8 characters' />
                  <CriteriaMessage valid={this.state.lettersNumbersCheck} msg='Password must both letters and numbers.' />
                  <CriteriaMessage valid={this.state.uppercaseCheck} msg='Password must contain at least 1 uppercase letter.' />
                  <CriteriaMessage valid={this.state.specialCharCheck} msg='Password must contain at least 1 special character.' />
                  <CriteriaMessage valid={this.state.pwMatchCheck} msg='Password must match.' />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
