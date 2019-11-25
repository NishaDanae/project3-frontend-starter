import React from "react";
import "./Deck.css";
import axios from "axios";

class Deck extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{this.props.card.title}</span>
              <p>{this.props.card.description}</p>
            </div>
            <div class="card-action">
              <a href="#">Delete</a>
              <a href="#">Study</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
