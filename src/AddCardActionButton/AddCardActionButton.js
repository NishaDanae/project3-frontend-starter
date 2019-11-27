import React from "react";

const AddCardActionButton = props => (
  <div class="fixed-action-btn">
    <a
      href={"/add-card/" + props.deckId}
      class="btn-floating btn-large green accent-2"
    >
      <i class="large material-icons">add</i>
    </a>
  </div>
);

export default AddCardActionButton;
