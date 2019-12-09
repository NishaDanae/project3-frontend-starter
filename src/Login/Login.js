import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount() {}

  createUser = event => {
    event.preventDefault();
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };
    this.props.createUser(user);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>LOGIN</h2>
          <form
            // onSubmit={this.createUser}
            onChange={this.handleChange}
            onSubmit={event => this.createUser(event)}
            className="col s12"
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  // value={this.state.first_name}
                  id="first_name"
                  type="text"
                  className="validate"
                  name="first_name"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 ">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  // value={this.state.last_name}
                  name="last_name"
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn waves-effect waves-light green accent-2"
            />
            <a
              href="/register"
              className="btn waves-effect waves-light green
           accent-2 black-text"
            >
              Register
            </a>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
