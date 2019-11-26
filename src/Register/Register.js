import React, { Component } from "react";
import "./Register.css";
import axios from "axios";

let databaseURL = "http://localhost:3001/api/";

class Register extends Component {
  state = {
    newUser: {}
  };

  createUser = event => {
    event.preventDefault();
    axios({
      url: databaseURL + "users",
      method: "post",
      data: this.state.newUser
    }).then(response => {
      console.log(response);
      // this.setState(prevState => ({
      //   users: [...prevState.users, response.data.user]
      // }));
    });
  };

  componentDidMount() {}

  handleChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.first_name);
    console.log(this.state.last_name);
  };

  handleSubmit = event => {};

  render() {
    return (
      <div className="row">
        <h1>DECKSTER</h1>
        <h2>Register</h2>
        <form
          // onSubmit={this.createUser}
          onChange={this.handleChange}
          className="col s12"
        >
          <div className="row">
            <div className="input-field col s12">
              <input
                // value={this.state.first_name}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                name="last_name"
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light green accent-2"
            type="submit"
            name="action"
            onClick={this.createUser}
          >
            Submit
            <i className="material-icons right ">send</i>
          </button>
        </form>
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
      //       <button type="submit">Register</button>
      //     </form>
      //   </div>
    );
  }
}
export default Register;
