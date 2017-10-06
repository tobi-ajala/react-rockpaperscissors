import React, { Component } from 'react';
import './App.css';
import Results from './Results'
import './index.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {games:[]}
    this.handleMove = this.handleMove.bind(this)
  }

  handleMove(playerMove) {
    var cpuMove = this.getCPUMove(),
        result = this.scoreGame(playerMove, cpuMove)


    console.log('Player chose: ' + playerMove + '. CPU chose: ' + cpuMove + '.')
    console.log('The winner is ' + (result === 1 ? 'player.' : result === 2 ? 'CPU.' : 'draw.'))

    this.setState((prev,props) => ({
      games: [...prev.games, { player: playerMove, cpu: cpuMove, winner: result }]
    }))
  }

  getCPUMove() {
    var moves = ['R', 'P', 'S'],
        move = Math.floor(Math.random() * 3)
    return moves[move]
  }

  scoreGame (p1Move, p2Move) {
    if (p1Move === p2Move) { return 'draw' }

    if ( (p1Move === 'R' & p2Move === 'S') ||
         (p1Move === 'P' & p2Move === 'R') ||
         (p1Move === 'S' & p2Move === 'P') ) {
      return 1
    } else {
      return 2
    }
  }

  render() {
    return (
      <div className="App">
        <div className="gameCanvas">
          <h1>Choose your weapon</h1>
          <div className="actions">
            <button onClick={()=>{this.handleMove('R')}}><img src={ require('./images/rock.svg') } alt="rock" /></button>
            <button onClick={()=>{this.handleMove('P')}}><img src={ require('./images/paper.svg') } alt="paper" /></button>
            <button onClick={()=>{this.handleMove('S')}}><img src={ require('./images/scissors.svg') } alt="scissors" /></button>
            <Results games={this.state.games}></Results>
            <br /><br />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
