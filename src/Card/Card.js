import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator"
            src={this.props.card.image}
            alt={this.props.card.term}
          />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {this.props.card.term}
            <i class="material-icons right">more_vert</i>
          </span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {this.props.card.definition}
            <i class="material-icons right">close</i>
          </span>
          <img src={this.props.card.image} alt={this.props.card.definition} />
        </div>
      </div>
    );
  }
}

export default Card;
