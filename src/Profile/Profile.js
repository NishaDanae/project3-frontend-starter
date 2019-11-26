import React from 'react';
// import './App.css';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
// const databaseUrl = 'https://project3-backend-test.herokuapp.com'

class Decks extends React.Component {
 
  render() {

    // console.log(this.state.users)
    // console.log("Rendered")
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Welcome</h1>

          {/* PASS THRU COMPONENT THAT IS ONLY THE USER NAME THEY ENTERED BEFORE */}
          <div className="homeBtns">
          <button className="newDeckBtn">+New Deck</button>
         <button className="deckBtn">Decks</button>
         </div>
        </header>
      </div>
    );
  }
}

export default Decks;
