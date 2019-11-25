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

  handleDelete = () => {
    axios({
      method: "delete",
      url: `http://localhost:3001/api/cards/${this.props.card.id}`
    }).then(response => {
      this.setState({ cards: response.data.cards });
    });
  };

  getCards = async () => {
    axios({
      method: "get",
      // eventually change the URL based on which deck is selected
      url: "http://localhost:3001/api/cards"
    }).then(response => {
      this.setState({ cards: response.data.cards });
    });
  };

  render() {
    const { cards } = this.state;
    const renderedList = cards.map(card => {
      return (
        <Card handleDelete={this.handleDelete} key={card.id} card={card} />
      );
    });

    return <div>{renderedList}</div>;
  }
}

export default CardList;
