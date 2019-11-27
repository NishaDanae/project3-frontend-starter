import React from "react";

const AddDeckActionButton = props => (
  <div class="fixed-action-btn">
    <a
      href={"/add-deck/" + props.deckId}
      class="btn-floating btn-large green accent-2"
    >
      <i class="large material-icons">add</i>
    </a>
  </div>
);

export default AddDeckActionButton;
