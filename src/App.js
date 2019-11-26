import React from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Deck from "./Deck/Deck";
import Card from "./Card/Card";
import CardList from "./CardList/CardList";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

let databaseURL = "http://localhost:3001/api/";

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      user: {}
    }
    console.log(props)
    this.createUser = this.createUser.bind(this);
  }


  createUser(user){
    // console.log('createUser App clicked')
    // console.log(user)
    // event.preventDefault();
    axios({
      url: databaseURL + "users",
      method: "post",
      data: {
        first_name: user.first_name,
        last_name: user.last_name
      }
    }).then(response => {
      this.setState({ user : response.data.user })
      console.log('login')
      console.log(this)
      this.props.history.replace("/Home");
    });
  };

  login(user){
    this.setState({user})
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={() => <Login login={this.login} createUser={e => this.createUser(e)} />} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={() => <Profile user={this.state.user} />} />
          <Route path="/decks" component={() => <Deck user={this.state.user} />} />
          <Route path="/card" component={Card}/>
          <Route path="/card-list" component={CardList} />
        </div>
      </Router>
    );
  }
}

export default App;
