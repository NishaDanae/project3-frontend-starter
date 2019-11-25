import React from "react";
import "./AddCard.css";
import axios from "axios";

class AddCard extends React.Component {
  state = {
    newCard: {},
    currentDeck: 1
  };

  createCard = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:3000/api/cards/1`,
      data: {
        term: this.state.term,
        definition: this.state.definition,
        image: this.state.image,
        mastered: false
      }
    }).then(response => {
      console.log(response);
    });
  };

  handleChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.term);
    console.log(this.state.definition);
    console.log(this.state.image);
  };

  render() {
    return (
      <div class="row">
        <form onChange={this.handleChange} class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">flip_to_front</i>
              <input
                id="icon_prefix"
                type="text"
                class="validate"
                name="term"
                onChange={this.handleChange}
              />
              <label for="icon_prefix">Front</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">flip_to_back</i>
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                name="definition"
                onChange={this.handleChange}
              />
              <label for="icon_telephone">Back</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">image</i>
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                name="image"
                onChange={this.handleChange}
              />
              <label for="icon_telephone">Image</label>
            </div>
            <div class="input-field col s6">
              <button
                class="btn waves-effect waves-light green accent-2"
                type="submit"
                onClick={this.createCard}
              >
                Submit
                <i class="material-icons right ">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCard;
