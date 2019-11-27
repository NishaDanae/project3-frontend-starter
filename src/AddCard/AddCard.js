import React from "react";
import "./AddCard.css";
import axios from "axios";
import { valueToNode } from "@babel/types";

class AddCard extends React.Component {
  state = {
    newCard: {},
    selectedImage: "",
    images: [],
    searchTerm: ""
  };

  getDeckId = () => {
    var parts = window.location.pathname.split("/");
    var deckId = parts[parts.length - 1];
    this.setState({ deckId });
  };

  componentWillMount() {
    this.getDeckId();
  }

  onImageSelect = (event, image) => {
    event.preventDefault();
    this.setState({ selectedImage: image });
    console.log(this.state.selectedImage);
  };

  onSearchSubmit = async () => {
    console.log(this.state.searchTerm);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: this.state.searchTerm },
      headers: {
        Authorization:
          "Client-ID 1db88f456bc1aba6f586b8b35d808a7c87d2c3a518a0bc54fb8bacc4cb8ace79"
      }
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  createCard = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:3000/api/cards/${this.state.deckId}`,
      data: {
        term: this.state.term,
        definition: this.state.definition,
        image: this.state.selectedImage,
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
    console.log(this.state.searchTerm);
  };

  render() {
    console.log(this.state.deckId);
    const imageList = this.state.images.map(image => (
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={image.urls.regular} />
              <span class="card-title"></span>
            </div>
            <div class="card-content black-text">
              <h1>{image.alt_description.toUpperCase()}</h1>
            </div>
            <div class="card-action">
              <a
                onClick={event => this.onImageSelect(event, image.urls.regular)}
              >
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <h1>Add Card</h1>
        <div className="row">
          <form onChange={this.handleChange} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">flip_to_front</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  name="term"
                  onChange={this.handleChange}
                />
                <label htmlFor="icon_prefix">Front</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">flip_to_back</i>
                <input
                  id="icon_telephone"
                  type="tel"
                  className="validate"
                  name="definition"
                  onChange={this.handleChange}
                />
                <label htmlFor="icon_telephone">Back</label>
              </div>

              <div className="input-field col s6">
                <button
                  className="btn waves-effect waves-light green accent-2"
                  type="submit"
                  onClick={this.createCard}
                >
                  Create Card
                  <i className="material-icons right ">send</i>
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
          </form>

          <div className="input-field col s6">
            <i className="material-icons prefix">image</i>
            <input
              id="icon_telephone"
              type="tel"
              className="validate"
              name="searchTerm"
              onChange={this.handleChange}
            />
            <label
              onChange={event =>
                this.setState({ searchTerm: event.target.value })
              }
              htmlFor="icon_telephone"
            >
              Image
            </label>
          </div>
          <div className="input-field col s6">
            <button
              className="btn waves-effect waves-light green accent-2"
              type="submit"
              onClick={this.onSearchSubmit}
            >
              Search
              <i className="material-icons right ">send</i>
            </button>
          </div>
          {imageList}
        </div>
      </div>
    );
  }
}

export default AddCard;
