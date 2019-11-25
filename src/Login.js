import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            handleErrors: ""
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}
handleSubmit(event) {
    const { email, password } = this.state;

  axios
  .post(
      "https://localhost:3001/api/users",
      {
          user:{
              email: email,
              password: password
          }
      },
      { withCredentials: true }
  )
  .then(response => {
      console.log("logged in", response);
  })
  .catch(error => {
      console.log("handle error", error);
  });
  event.preventDefault();
}
render() {
    return (
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12" id="userIn">
        <input className="username"
                type="email"
                name="email"
                required
                />
          <label id="email">Email</label>
        </div>
        <div className="input-field col s12" id="passIn">
        <input className="password"
                type="password"
                name="password"
                required
                />
          <label id="password">Password</label>
        </div>
         <button id="loginBtn" type="submit">Login</button>
      </div>
    </form>
  </div>
        
        


        // <div>
        //     <form onSubmit={this.handleSubmit}>
        //         <input className="username"
        //         type="email"
        //         name="email"
        //         placeholder="Username"
        //         value={this.state.email}
        //         onChange={this.handleChange}
        //         required
        //         />
        //         <input className="password"
        //         type="password"
        //         name="password"
        //         placeholder="Password"
        //         value={this.state.password}
        //         onChange={this.handleChange}
        //         required
        //         />
        //         <button type="submit">Login</button>

        //     </form>
        // </div>
    )
}
}
export default Login;