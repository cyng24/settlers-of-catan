import React from 'react'
import '../style.css';
import Dashboard from '../components/Dashboard.jsx'
import Board from '../components/Board.jsx'
import Pieces from '../components/Pieces.jsx'

const green = '#759d75';
const red = '#ae5d5d';
const yellow = '#fbdf8b';
const brown = '#926f5a';
const gray = '#818181';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      addCity: false,
      colors: { green, red, yellow, brown, gray },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const change = !this.state.addCity
    this.setState({ addCity: change });
  }
    
  render() {
    return (
      <div className="d-flex">
        <Dashboard colors={this.state.colors} windowWidth={this.state.windowWidth} cityToggle={this.handleChange} />
        <div>
          <Board colors={this.state.colors} />
          <Pieces addCity={this.state.addCity} />
        </div>
      </div>
    )
  }
}