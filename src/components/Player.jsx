import React from 'react'
import { connect } from 'react-redux';
import './styles/main.css';
import Card from './dashboard/Card.jsx';
import Forest from './patterns/Forest.jsx';
import Mountain from './patterns/Mountain.jsx';
import Hill from './patterns/Hill.jsx';
import Field from './patterns/Field.jsx';
import Pasture from './patterns/Pasture.jsx';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { pasture: 0, field: 0, hill: 0, mountain: 0, forest: 0 },
      playerPoints: 0
    };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.subPoint = this.subPoint.bind(this);
  }

  addCard(card) {
    const pattern = card.toLowerCase();
    let newValues = this.state.values;
    if (newValues[pattern] < 19) {
      newValues[pattern]++;
      this.props.useResource(pattern, 1)
    }
    this.setState({ values: newValues });
  };
  removeCard(card) {
    const pattern = card.toLowerCase();
    let newValues = this.state.values;
    if (newValues[pattern] > 0) {
      newValues[pattern]--;
      this.props.useResource(pattern, -1)
    }
    this.setState({ values: newValues });
  }

  addPoint() {
    let newValue = this.state.playerPoints;
    this.setState({ playerPoints: ++newValue });
  };
  subPoint() {
    let newValue = this.state.playerPoints;
    if (newValue > 0) {
      newValue--;
    }
    this.setState({ playerPoints: newValue });
  }
  
  render() {
    const cardProps = this.props.cardProps;
    const tileColors = this.props.tileColors;

    return (
    <div className="playerboard">
      <Card addCard={this.addPoint} removeCard={this.subPoint}>
        <div className="d-flex align-items-center mx-4 mb-2">
          <span className="material-icons md-30">star</span>
          <span className="lead">{this.state.playerPoints}</span>
        </div>
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Pasture cardProps={cardProps} hex={tileColors.green} value={this.state.values.pasture} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Hill cardProps={cardProps} hex={tileColors.red} value={this.state.values.hill} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
      <Forest cardProps={cardProps} hex={tileColors.brown} value={this.state.values.forest} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Field cardProps={cardProps} hex={tileColors.yellow} value={this.state.values.field} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Mountain cardProps={cardProps} hex={tileColors.gray} value={this.state.values.mountain} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <svg width={cardProps.size} height={cardProps.size}>
          <rect x="4" y="4" width={cardProps.size-8} height={cardProps.size-8} stroke="black" fill="none" />
        </svg>
      </Card>
    </div>
  )}
}

const mapState = (state) => {
  return {
    tileColors: state.tileColors,
    cardProps: state.cardProps
  };
};

const mapDispatch = (dispatch) => {
  return {
    useResource: (resource, value) => dispatch({ type: 'useResource', resource, value })
  }
};

export default connect(mapState, mapDispatch)(Player);