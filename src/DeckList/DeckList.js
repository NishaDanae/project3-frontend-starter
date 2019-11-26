import React from "react";
import axios from "axios";
import Deck from "../Deck/Deck";
import "./DeckList.css";

class DeckList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      decks: [],
      selectedDeck: null,
      editedCard: {}
    };
  }

  componentDidMount() {
    this.getDecks();
  }

  handleDelete = id => {
    axios({
      method: "delete",
      url: `http://localhost:3001/api/cards/${id}`
    }).then(response => {
      this.setState({ decks: response.data.decks });
    });
  };

  getDecks = async () => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/decks"
    }).then(response => {
      this.setState({ decks: response.data.decks });
      console.log(this.state.decks);
    });
  };

  render() {
    const { decks } = this.state;
    const renderedList = decks.map(deck => {
      return (
        <Deck
          decks={this.state.decks}
          handleDelete={this.handleDelete}
          key={deck.id}
          card={deck}
        />
      );
    });

    return (
      <div>
        <h1>Decks</h1>
        <div class="fixed-action-btn">
          <a href="/add-deck" class="btn-floating btn-large green accent-2">
            <i class="large material-icons">add</i>
          </a>
        </div>
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default DeckList;
