import React from 'react'
import './styles/main.css';
import Card from './Card.jsx';
import Forest from './patterns/Forest.jsx';
import Mountain from './patterns/Mountain.jsx';
import Hill from './patterns/Hill.jsx';
import Field from './patterns/Field.jsx';
import Pasture from './patterns/Pasture.jsx';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      values: { pasture: 0, field: 0, hill: 0, mountain: 0, forest: 0 },
    };
    this.roll = props.roll.bind(this);
    this.cityToggle = props.cityToggle.bind(this);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard(pattern) {
    let newValues = this.state.values;
    newValues[pattern.toLowerCase()]++;
    this.setState({ values: newValues });
  };
  removeCard(pattern) {
    let newValues = this.state.values;
    if (newValues[pattern.toLowerCase()] > 0) {
      newValues[pattern.toLowerCase()]--;
    }
    this.setState({ values: newValues });
  }
  
  render() {
    const cardSize = 80;
    const polygonPoints = `0 0 ${cardSize*2} 0 ${cardSize*2} ${cardSize} 0 ${cardSize}`;

    return (
    <div className="dashboard">
      <div className="d-flex justify-content-around my-2">
        <button className={"button-dash" + (this.props.addCity ? " active" : "")} onClick={this.cityToggle}>
          <span className="material-icons md-40">location_city</span>
        </button>
        <button className="button-dash d-flex align-items-center" onClick={this.roll}>
          <span className="material-icons md-40">casino</span>
          <span style={{fontSize: '24px'}}>{this.props.diceRoll}</span>
        </button>
      </div>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Pasture cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={this.state.colors.green} value={this.state.values.pasture} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Hill cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={this.state.colors.red} value={this.state.values.hill} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
      <Forest cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={this.state.colors.brown} value={this.state.values.forest} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Field cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={this.state.colors.yellow} value={this.state.values.field} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <Mountain cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={this.state.colors.gray} value={this.state.values.mountain} />
      </Card>
      <Card addCard={this.addCard} removeCard={this.removeCard}>
        <svg width={cardSize*2} height={cardSize}>
          <rect x="0" y="0" width={cardSize*2} height={cardSize} stroke="black" fill="none" />
        </svg>
      </Card>
    </div>
  )}
}