import React from "react";
import "./Deck.css";
import axios from "axios";

class Deck extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card large white">
            <div className="card-content black-text">
              <span className="card-title">{this.props.card.title}</span>
              <hr />
              <p>{this.props.card.description}</p>
            </div>
            <div className="card-action">
              <a className="green-text accent-2 left" href="#">
                Study
              </a>
              <a
                className="green-text accent-2 right"
                onClick={this.props.handleDelete}
                href="#"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
