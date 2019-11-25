import React from "react";
import "./Card.css";
import axios from "axios";

class Card extends React.Component {
  state = {
    mastered: false,
    editing: false,
    editedCard: {}
  };

  handleMastered = event => {
    event.stopPropagation();
    this.setState({ mastered: !this.state.mastered });
    axios({
      method: "put",
      url: `http://localhost:3001/api/cards/${this.props.card.id}`,
      mastered: this.state.mastered
    }).then(response => console.log(response));
  };

  setEdit = () => {
    this.setState({ editiing: !this.state.editing });
    console.log(this.state.editing);
  };

  handleEdit = () => {
    axios({
      method: "put",
      url: `http://localhost:3000/api/cards/${this.props.card.id}`,
      data: {}
    });
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="card sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src={this.props.card.image}
            alt={this.props.card.term}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.card.term}
            {this.state.mastered ? (
              <i
                onClick={this.handleMastered}
                className="material-icons right small"
              >
                bookmark
              </i>
            ) : (
              <i
                onClick={this.handleMastered}
                className="material-icons right small"
              >
                bookmark_border
              </i>
            )}
            <i className="material-icons right small">expand_less</i>
            <p>
              <hr />
              <button onClick={this.handleDelete}> Delete </button>
              <hr />
            </p>
          </span>
        </div>
        <div className="card-reveal small">
          <span className="card-title grey-text text-darken-4">
            {this.props.card.definition}
            <i className="material-icons right">close</i>
          </span>
          <img
            className="reveal-image"
            src={this.props.card.image}
            alt={this.props.card.definition}
          />
=======
      <div>
        <div onClick={this.setEdit} class="fixed-action-btn">
          <a class="btn-floating btn-large red">
            <i class="large material-icons">mode_edit</i>
          </a>
>>>>>>> 35256c3c4f58647ad16419f913dc2aa0595a52d6
        </div>
        {!this.state.editing ? (
          <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={this.props.card.image}
                alt={this.props.card.term}
              />
            </div>

            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.props.card.term}
                {this.state.mastered ? (
                  <i
                    onClick={this.handleMastered}
                    className="material-icons right small"
                  >
                    star
                  </i>
                ) : (
                  <i
                    onClick={this.handleMastered}
                    className="material-icons right small"
                  >
                    star_border
                  </i>
                )}
                <i className="material-icons right small">expand_less</i>
                <p>
                  <hr />
                  <a
                    onClick={() => this.props.handleDelete(this.props.card.id)}
                    href="#"
                  >
                    Delete
                  </a>
                </p>
              </span>
            </div>
            <div className="card-reveal small">
              <span className="card-title grey-text text-darken-4">
                {this.props.card.definition}
                <i className="material-icons right">close</i>
              </span>
              <img
                className="reveal-image"
                src={this.props.card.image}
                alt={this.props.card.definition}
              />
            </div>
          </div>
        ) : (
          <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={this.props.card.image}
                alt={this.props.card.term}
              />
            </div>

            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.props.card.term}
                {this.state.mastered ? (
                  <i
                    onClick={this.handleMastered}
                    className="material-icons right small"
                  >
                    star
                  </i>
                ) : (
                  <i
                    onClick={this.handleMastered}
                    className="material-icons right small"
                  >
                    star_border
                  </i>
                )}
                <i className="material-icons right small">expand_less</i>
                <p>
                  <hr />
                  <a onClick={this.handleDelete} href="#">
                    Delete
                  </a>
                </p>
              </span>
            </div>
            <div className="card-reveal small">
              <span className="card-title grey-text text-darken-4">
                {this.props.card.definition}
                <i className="material-icons right">close</i>
              </span>
              <img
                className="reveal-image"
                src={this.props.card.image}
                alt={this.props.card.definition}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
