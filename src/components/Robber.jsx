import React from 'react'
import { connect } from 'react-redux';
import './styles/main.css';
import RobberFace from './patterns/RobberFace.jsx';

class Robber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robberIndex: props.values.indexOf(null)
    };
    this.changeRobber = this.changeRobber.bind(this);
  }
  
  changeRobber(newIndex) {
    this.setState({ robberIndex: newIndex });
  }
    
  render() {
    return (
      <div className="board-placement" style={{paddingTop: "90px"}}>
        <span className="d-flex justify-content-center board">
          <RobberFace index={0} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={1} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={2} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
        </span>
        <span className="d-flex justify-content-center board">
          <RobberFace index={3} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={4} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={5} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={6} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
        </span>
        <span className="d-flex justify-content-center board">
          <RobberFace index={7} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={8} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={9} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={10} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={11} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
        </span>
        <span className="d-flex justify-content-center board">
          <RobberFace index={12} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={13} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={14} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={15} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
        </span>
        <span className="d-flex justify-content-center board">
          <RobberFace index={16} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={17} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
          <RobberFace index={18} robberIndex={this.state.robberIndex} changeRobber={this.changeRobber} />
        </span>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    values: state.values,
  };
};

export default connect(mapState)(Robber);