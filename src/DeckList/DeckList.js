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
      selectedDeckId: null,
      editedCard: {},
      userId: null
    };
  }

  componentWillMount() {
    this.getUserId();
    console.log(this.state.userId);
  }

  componentDidMount() {
    this.getDecks(this.state.userId);
  }

  getUserId = () => {
    var parts = window.location.pathname.split("/");
    var userId = parts[parts.length - 1];
    this.setState({ userId });
  };

  handleDelete = id => {
    axios({
      method: "delete",
      url: `http://localhost:3000/api/decks/${id}`
    }).then(response => {
      this.setState({ decks: response.data.decks });
    });
  };

  getDecks = id => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/users/${id}`
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
        <AddDeckActionButton deckId={this.state.selectedDeckId} />
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
