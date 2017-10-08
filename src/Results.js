import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Results extends Component {

  constructor(props) {
    super(props)
    this.playerWins = this.playerWins.bind(this)
    this.playerLosses = this.playerLosses.bind(this)
    this.playerDraws = this.playerDraws.bind(this)
  }

  playerWins() { //function - if the game state is the player wins, add 1 to wins status
    return this.props.games.reduce( (sum, g) => { return g.winner === 1 ? sum+1 : sum }, 0 )
  }
  playerLosses() { //function - if the game state is the player loses, add 1 to loses status
    return this.props.games.reduce( (sum, g) => { return g.winner === 2 ? sum+1 : sum }, 0 )
  }
  playerDraws() { //function - if the game state is a draw, add 1 to draw status
    return this.props.games.length-this.playerWins()-this.playerLosses();
  }

  render() {
    return (
      <div className="results">
        <ul>
          <li>Wins: {this.playerWins()}</li> {/*rendering the results interface*/}
          <li>Losses: {this.playerLosses()}</li>
          <li>Draws: {this.playerDraws()}</li>
          <br />
          <li>Games: {this.props.games.length}</li>
        </ul>
      </div>
    );
  }
}

Results.propTypes = {
  games: PropTypes.array
}

export default Results;
