import React from "react";
import Card from "../Card/Card";
import "./CardList.css";
import axios from "axios";

class CardList extends React.Component {
  state = {
    currentDeck: null,
    cards: [],
    editedCard: {}
  };

  getDeckId = () => {
    var parts = window.location.pathname.split("/");
    var userId = parts[parts.length - 1];
    this.setState({ userId });
  };

  componentDidMount() {
    this.getCards();
  }

  handleDelete = id => {
    axios({
      method: "delete",
      url: `http://localhost:3000/api/cards/${id}`
    }).then(response => {
      this.setState({ cards: response.data.cards });
    });
  };

  getCards = async () => {
    axios({
      method: "get",
      // eventually change the URL based on which deck is selected
      url: "http://localhost:3000/api/cards/"
    }).then(response => {
      this.setState({ cards: response.data.cards });
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

    return (
      <div>
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default CardList;
