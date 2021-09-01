import React from 'react'
import '../style.css';
import Dashboard from '../components/Dashboard.jsx'
import Board from '../components/Board.jsx'
import Pieces from '../components/Pieces.jsx'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addCity: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const change = !this.state.addCity
    this.setState({ addCity: change });
  }
    
  render() {
    return (
      <div className="d-flex">
        <Dashboard cityToggle={this.handleChange} />
        <div>
          <Board />
          <Pieces addCity={this.state.addCity} />
        </div>
      </div>
    )
  }
}