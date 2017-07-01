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
      <div className="App">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <h2>Create a New Account</h2>
          <p>Already a member? Login</p>
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
      </div>
    );
  }
}

export default App;
