import React from "react";
import axios from "axios";
import Deck from "../Deck/Deck";
import AddDeckActionButton from "../AddDeckActionButton/AddDeckActionButton";
import "./DeckList.css";

class DeckList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      decks: [],
      deckId: null,
      editedCard: {}
    };
  }

  componentWillMount() {
    this.getDeckId();
    console.log(this.state.deckId);
  }

  componentDidMount() {
    this.getDecks(this.state.deckId);
  }

  getDeckId = () => {
    var parts = window.location.pathname.split("/");
    var deckId = parts[parts.length - 1];
    this.setState({ deckId });
  };

  handleDelete = id => {
    axios({
      method: "delete",
      url: `https://github.com/gatlin-carrier/project3-frontend-starter/${id}`
    }).then(response => {
      this.setState({ decks: response.data.decks });
    });
  };

  getDecks = id => {
    axios({
      method: "get",
      url: `https://github.com/gatlin-carrier/project3-frontend-starter/${id}`
    }).then(response => {
      this.setState({ decks: response.data.Decks });
    });
  };

  updateSelectedDeck = id => {
    this.setState({ selectedDeckId: id });
  };

  render() {
    const { decks } = this.state;
    const renderedList = decks.map(deck => {
      return (
        <Deck
          userId={this.state.userId}
          decks={this.state.decks}
          handleDelete={this.handleDelete}
          key={deck.id}
          deck={deck}
          updateSelectedDeck={this.updateSelectedDeck}
        />
      );
    });

    return !renderedList[0] ? (
      <div>
        <h1>Decks</h1>
        <h2>Please Make a Deck</h2>
        <AddDeckActionButton deckId={this.state.deckId} />
      </div>
    ) : (
      <div>
        <h1>Decks</h1>
        <AddDeckActionButton deckId={this.state.selectedDeckId} />
        <div className="row">{renderedList}</div>
      </div>
    );
  }
}

export default DeckList;
