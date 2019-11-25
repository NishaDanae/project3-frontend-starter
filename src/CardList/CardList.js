import React from "react";
import Card from "../Card/Card";
import axios from "axios";

class CardList extends React.Component {
  state = {
    currentDeck: null,
    cards: []
  };

  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    axios({
      method: "get",
      // eventually change the URL based on which deck is selected
      url: "http://localhost:3000/api/cards"
    }).then(response => {
      this.setState({ cards: response.data.cards });
    });
  };

  render() {
    const { cards } = this.state;
    const renderedList = cards.map(card => {
      return <Card key={card.id} card={card} />;
    });

    return <div>{renderedList}</div>;
  }
}

export default CardList;
