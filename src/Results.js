import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Results extends Component {
  constructor(props) {
    super(props)
    this.playerWins = this.playerWins.bind(this)
    this.playerLosses = this.playerLosses.bind(this)
    this.playerWinPct = this.playerWinPct.bind(this)
  }

  playerWins() {
    return this.props.games.reduce( (sum, g) => { return g.winner === 1 ? sum+1 : sum }, 0 )
  }

  playerLosses() {
    return this.props.games.reduce( (sum, g) => { return g.winner === 2 ? sum+1 : sum }, 0 )
  }

  playerWinPct() {
    if (this.props.games.length === 0) return '-'
    return ((this.playerWins() / this.props.games.length).toFixed(2) * 100) + '%'
  }

  render() {
    return (
      <div className="results">
        <ul>
          <li>Wins: {this.playerWins()}</li>
          <li>Losses: {this.playerLosses()}</li>
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
