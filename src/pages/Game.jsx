import React from 'react'
import '../components/styles/main.css';
import Dashboard from '../components/Dashboard.jsx'
import RobberBoard from '../components/RobberBoard.jsx'
import Board from '../components/Board.jsx'
import Pieces from '../components/Pieces.jsx'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      diceRoll: 0,
      addCity: false,
    }
    this.roll = this.roll.bind(this);
    this.changeCityState = this.changeCityState.bind(this);
  }

  roll() {
    let diceRoll = Math.floor(Math.random()*11)+2;
    this.setState({ diceRoll });
  };

  changeCityState() {
    const change = !this.state.addCity
    this.setState({ addCity: change });
  }
    
  render() {
    return (
      <div className="game">
        <Dashboard cityToggle={this.changeCityState} addCity={this.state.addCity} roll={this.roll} diceRoll={this.state.diceRoll} />
        <div>
          <RobberBoard />
          <Board diceRoll={this.state.diceRoll} />
          <Pieces addCity={this.state.addCity} />
        </div>
      </div>
    )
  }
}