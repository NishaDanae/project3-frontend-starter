import React from "react";
import Card from "../Card/Card";
import "./CardList.css";
import axios from "axios";
import "../AddDeckActionButton/AddDeckActionButton";
import AddCardActionButton from "../AddCardActionButton/AddCardActionButton";

class CardList extends React.Component {
  state = {
    currentDeck: null,
    cards: [],
    editedCard: {},
    deckId: null
  };

  getDeckId = () => {
    var parts = window.location.pathname.split("/");
    var deckId = parts[parts.length - 1];
    this.setState({ deckId });
  };

  componentWillMount() {
    this.getDeckId();
  }

  componentDidMount() {
    this.getCards(this.state.deckId);
  }

  handleDelete = id => {
    axios({
      method: "delete",
      url: `https://github.com/gatlin-carrier/project3-frontend-starter/${id}`
    }).then(response => {
      this.setState({ cards: response.data.cards });
    });
    this.getCards(id);
  };

  getCards = async id => {
    axios({
      method: "get",
      url: `https://github.com/gatlin-carrier/project3-frontend-starter/${id}`
    }).then(response => {
      this.setState({ cards: response.data.Cards });
    });
  };

  render() {
    const { cards } = this.state;
    const renderedList = cards.map(card => {
      return (
        <Card
          cards={this.state.cards}
          handleDelete={this.handleDelete}
          key={card.id}
          card={card}
        />
      );
    });

    return !renderedList[0] ? (
      <div>
        <h1>Cards</h1>
        <AddCardActionButton deckId={this.state.deckId} />
        <h1>Please Add a Card</h1>
      </div>
    ) : (
      <div>
        <h1>Cards</h1>
        <AddCardActionButton deckId={this.state.deckId} />
        <div className="row">{renderedList}</div>
      </div>
    );
  }
}

export default CardList;
