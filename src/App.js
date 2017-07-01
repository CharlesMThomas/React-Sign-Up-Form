import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: 'signUp'
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
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="pasword" className="form-control" placeholder="New Password" />
              </div>
              <div className="form-group">
                <input type="pasword" className="form-control" placeholder="Re-enter Password" />
              </div>
              <button type="submit" className="btn btn-success btn-block">Create Account</button> 
            </form>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3>Password Criteria</h3>
                <ul>
                  <li className="text-left"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Password must be greater than 8 characters.</li>
                  <li className="text-left"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Password must both letters and numbers.</li>
                  <li className="text-left"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Password must contain at least 1 uppercase letter.</li>
                  <li className="text-left"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Password must contain at least 1 special character.</li>
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
