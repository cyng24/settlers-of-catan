import React from 'react'
import '../components/styles/main.css';
import Dashboard from '../components/Dashboard.jsx'
import Board from '../components/Board.jsx'
import Pieces from '../components/Pieces.jsx'

const green = '#759d75';
const red = '#ae5d5d';
const yellow = '#fbdf8b';
const brown = '#926f5a';
const gray = '#818181';
const blue = '#c1ccea';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      diceRoll: 0,
      addCity: false,
      colors: { green, red, yellow, brown, gray, blue },
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
        <Dashboard colors={this.state.colors} windowWidth={this.state.windowWidth} cityToggle={this.changeCityState} addCity={this.state.addCity} roll={this.roll} diceRoll={this.state.diceRoll} />
        <div>
          <Board colors={this.state.colors} diceRoll={this.state.diceRoll} />
          <Pieces addCity={this.state.addCity} />
        </div>
      </div>
    )
  }
}