import React from 'react'
import './styles/main.css';
import RobberPiece from './patterns/RobberPiece.jsx';

export default class RobberBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    // this.setState({ robberIndex });
  }
    
  render() {
    return (
      <div className="board-placement" style={{paddingTop: "90px"}}>
        <span className="d-flex justify-content-center board">
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        </span>
        <span className="d-flex justify-content-center board">
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        </span>
        <span className="d-flex justify-content-center board">
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        </span>
        <span className="d-flex justify-content-center board">
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        </span>
        <span className="d-flex justify-content-center board">
        <RobberPiece />
        <RobberPiece />
        <RobberPiece />
        </span>
      </div>
    )
  }
}