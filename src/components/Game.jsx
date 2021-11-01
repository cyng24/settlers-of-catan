import React from 'react'
import '../components/styles/main.css';
import Dashboard from './Dashboard.jsx'
import Robber from './Robber.jsx'
import Board from './Board.jsx'
import Pieces from './Pieces.jsx'

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
          <Robber />
          <Board diceRoll={this.state.diceRoll} />
          <Pieces addCity={this.state.addCity} />
        </div>
      </div>
    )
  }
}