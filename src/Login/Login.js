import React, { Component } from "react";
import "./Login.css";
import {
  Link
} from 'react-router-dom'

class Login extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount() {}

  createUser = event => {
    event.preventDefault()
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }
    this.props.createUser(user)
  }

  handleChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.first_name);
    // console.log(this.state.last_name);
  };

  handleSubmit = event => {};

  render() {
    return (
      <div className="row">
        <h1>DECKSTER</h1>
        <h2>LOG IN OR REGISTER BELOW</h2>
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
          <input type="submit" value='Login' className="btn waves-effect waves-light green accent-2"/>
          {/* <Link
  to={`/profile/${this.props.createUser}`}
  type="button"
  className="tn waves-effect waves-light green accent-2"
>
Login
</Link> */}
          {/* <button
            className="btn waves-effect waves-light green accent-2"
            type="submit"
            name="action"
            onClick={`/profile/${this.props.createUser}`}
          // > */}
         <a href="/profile" className="btn waves-effect waves-light green accent-2">Login</a>
            {/* // <i className="material-icons right ">send</i> */}
          {/* </button> */}
        </form>
        <a href="/register" className="btn waves-effect waves-light blue accent-2">Register</a>
      </div>
      //   <div>
      //     <form onSubmit={this.handleSubmit}>
      //       <input
      //         class="input-field inline"
      //         type="email"
      //         name="email"
      //         placeholder="Username"
      //         value={this.state.email}
      //         onChange={this.handleChange}
      //         required
      //       />
      //       <input
      //         type="password"
      //         name="password"
      //         placeholder="Password"
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //         required
      //       />
            
      //     </form>
      //   </div>
    );
  }
}
export default Login;
