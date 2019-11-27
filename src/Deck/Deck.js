import React from "react";
import "./Deck.css";
import axios from "axios";

class Deck extends React.Component {
  render() {
    console.log(this.props.deck.id);
    return (
      <div className="col s12 m6">
        <div className="card large">
          <div className="card-content black-text">
            <span className="card-title">{this.props.deck.title}</span>
            <hr />
            <p>{this.props.deck.description}</p>
          </div>
          <div className="card-action">
            <a
              href={"/card-list/" + this.props.userId}
              className="green-text accent-2 left"
              href="#"
            >
              Study
            </a>
            <a
              className="green-text accent-2 right"
              onClick={this.props.handleDelete}
              href="#"
              onClick={() => this.props.handleDelete(this.props.deck.id)}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
