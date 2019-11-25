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
      url: `http://localhost:3000/api/`,
      data: {
        term: this.state.term,
        definition: this.state.definition,
        image: this.state.image
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
    console.log(this.state.first_name);
    console.log(this.state.last_name);
  };

  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">flip_to_front</i>
              <input
                id="icon_prefix"
                type="text"
                class="validate"
                name="term"
              />
              <label for="icon_prefix">Front</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">flip_to_back</i>
              <input id="icon_telephone" type="tel" class="validate" />
              <label for="icon_telephone">Back</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">image</i>
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                name="definition"
              />
              <label for="icon_telephone">Image</label>
            </div>
            <div class="input-field col s6">
              <button
                class="btn waves-effect waves-light green accent-2"
                type="submit"
                name="image"
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
