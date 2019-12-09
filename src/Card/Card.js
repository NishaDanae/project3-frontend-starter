import React from "react";
import "./Card.css";
import axios from "axios";

class Card extends React.Component {
  state = {
    mastered: false
  };

  handleMastered = event => {
    event.stopPropagation();
    this.setState({ mastered: !this.state.mastered });
    axios({
      method: "put",
      url: `https://github.com/gatlin-carrier/project3-frontend-starter/${this.props.card.id}`,
      data: { mastered: this.state.mastered }
    }).then(response => console.log(response));
  };

  render() {
    return (
      <div>
        <div onClick={this.setEdit} className="fixed-action-btn">
          <a href="/add-card" className="btn-floating btn-large green accent-2">
            <i className="large material-icons">add</i>
          </a>
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
              <hr />
              <br />
              <br />
              <img
                className="reveal-image"
                src={this.props.card.image}
                alt={this.props.card.definition}
              />
            </div>
          </div>
        ) : (
          <div className="card small sticky-action">
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
