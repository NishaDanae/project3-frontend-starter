import React from "react";
import axios from "axios";
import Deck from "../Deck/Deck";
import "./DeckList.css";

class DeckList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    this.getDecks();
  }

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

    return <div>{renderedList}</div>;
  }
}

export default DeckList;
