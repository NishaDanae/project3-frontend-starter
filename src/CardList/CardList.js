import React from "react";
import Card from "../Card/Card";
import axios from "axios";

class CardList extends React.Component {
  state = {
    currentDeck: null,
    cards: [],
    editedCard: {}
  };

  componentDidMount() {
    this.getCards();
  }

  handleDelete = id => {
    axios({
      method: "delete",
<<<<<<< HEAD
      url: `http://localhost:3001/api/cards/${this.props.card.id}`
=======
      url: `http://localhost:3000/api/cards/${id}`
>>>>>>> 35256c3c4f58647ad16419f913dc2aa0595a52d6
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
        <Card
          cards={this.state.cards}
          handleDelete={this.handleDelete}
          key={card.id}
          card={card}
        />
      );
    });

    return <div>{renderedList}</div>;
  }
}

export default CardList;
