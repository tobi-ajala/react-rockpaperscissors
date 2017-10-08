import React, { Component } from 'react';
import './App.css';
import './index.css'
import Results from './Results'

class App extends Component {

  constructor(props) { //constructor component called before it's mounted
    super(props) //forks the props and sets the state with the initial props
    this.state = {games:[]} //start an empty game state
    this.handleMove = this.handleMove.bind(this)
  }

  handleMove(playerMove) {
    var cpuMove = this.getCPUMove(), //get the current state of the cpuMove function
        result = this.scoreGame(playerMove, cpuMove) //get the current result from the playerMove and cpuMove functions

    console.log('Player chose: ' + playerMove + '. CPU chose: ' + cpuMove + '.') //log user & cpu options in console
    console.log('The winner is ' + (result === 1 ? 'player.' : result === 2 ? 'CPU.' : 'draw.')) //log the result in the console

    this.setState((prev,props) => ({ //function to set the new game state from user & cpu choices actioned above
      games: [...prev.games, { player: playerMove, cpu: cpuMove, winner: result }] //game state takes previous states and increments with new game result state
    }))
  }

  handleCMoves(playerMove) { //computer same handleMove funtion in the console except for computer vs computer
    var cpuMove = this.getCPUMove(), //get the current state of the cpuMove function
        result = this.scoreGame(playerMove, cpuMove) //get the current result from the playerMove and cpuMove functions

    console.log('Computer 1 chose: ' + playerMove + '. Computer 2 chose: ' + cpuMove + '.')
    console.log('The winner is ' + (result === 1 ? 'Computer 1.' : result === 2 ? 'Computer 2.' : 'draw.'))

    this.setState((prev,props) => ({
      games: [...prev.games, { player: playerMove, cpu: cpuMove, winner: result }]
    }))
  }

  getCPUMove() {
    var moves = ['R', 'P', 'S'], //declaring rock, paper, scissors as R, P, S variables
        move = Math.floor(Math.random() * 3) //establishes a random whole number to represent the cpu choice
    return moves[move] //return the cpu random whole number as a R, P, S value
  }

  scoreGame (p1Move, cpuMove) {
    if (p1Move === cpuMove) { return 'draw' } //if user & cpu moves = the same return a draw state
    if ( (p1Move === 'R' & cpuMove === 'S') || //if conditions for occurance of R, P, S user choice
         (p1Move === 'P' & cpuMove === 'R') ||
         (p1Move === 'S' & cpuMove === 'P') ) {
      return 1 //return console 'winner is..' statement
    } else {
      return 2
    }
  }

  restartGame(event) { //restart game function
    this.setState({ games: [] }); //empty the games state array, hence resetting the game state
  }

  render() { //rendering the app interface
    return (
      <div className="App">
        <div className="gameCanvas">
          <h1>Choose your weapon</h1>
          <div className="actions">
            {/*defining R, P, S images as buttons that call on the handleMove function when clicked*/}
            <button onClick={()=>{this.handleMove('R')}}><img src={ require('./images/rock.svg') } alt="rock" /></button>
            <button onClick={()=>{this.handleMove('P')}}><img src={ require('./images/paper.svg') } alt="paper" /></button>
            <button onClick={()=>{this.handleMove('S')}}><img src={ require('./images/scissors.svg') } alt="scissors" /></button>
            <Results games={this.state.games}></Results> {/*defining the state i.e. score of the current games*/}
            <br /><br />
            <button type="button" onClick={ this.restartGame.bind(this) }><span>Restart Game</span></button>   {/*calling the restartGame function using bind to create a new bound function*/}
            <br /><br />
            <button type="button" onClick={ () => this.handleCMoves(this.getCPUMove()) }><span>Click to simulate Computer vs Computer</span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default App; //part of es6 module system
