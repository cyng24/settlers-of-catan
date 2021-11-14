import React from 'react'
import { connect } from 'react-redux';
import './styles/main.css';
import Forest from './patterns/Forest.jsx';
import Mountain from './patterns/Mountain.jsx';
import Hill from './patterns/Hill.jsx';
import Field from './patterns/Field.jsx';
import Pasture from './patterns/Pasture.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      cardProps: props.cardProps,
      values: { pasture: 19, field: 19, hill: 19, mountain: 19, forest: 19 }
    };
    this.roll = props.roll.bind(this);
    this.cityToggle = props.cityToggle.bind(this);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard(pattern) {
    let newValues = this.state.values;
    if (newValues[pattern.toLowerCase()] < 19) {
      newValues[pattern.toLowerCase()]++;
    }
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
    const cardProps = this.state.cardProps;

    return (
    <div className="dashboard">
      <div className="d-flex justify-content-around my-2">
        <button className={"button-dash" + (this.props.addCity ? " active" : "")} onClick={this.cityToggle}>
          <span className="material-icons md-30">location_city</span>
        </button>
        <button className="button-dash d-flex align-items-center" onClick={this.roll}>
          <span className="material-icons md-30">casino</span>
          <span style={{fontSize: '20px'}}>{this.props.diceRoll}</span>
        </button>
      </div>
      <Pasture cardProps={cardProps} hex={this.state.colors.green} value={this.state.values.pasture} />
      <Hill cardProps={cardProps} hex={this.state.colors.red} value={this.state.values.hill} />
      <Forest cardProps={cardProps} hex={this.state.colors.brown} value={this.state.values.forest} />
      <Field cardProps={cardProps} hex={this.state.colors.yellow} value={this.state.values.field} />
      <Mountain cardProps={cardProps} hex={this.state.colors.gray} value={this.state.values.mountain} />
      <svg width={cardProps.size} height={cardProps.size}>
        <rect x="4" y="4" width={cardProps.size-8} height={cardProps.size-8} stroke="black" fill="none" />
      </svg>
    </div>
  )}
}

const mapState = (state) => {
  return {
    colors: state.tileColors,
    cardProps: state.cardProps
  };
};

export default connect(mapState)(Dashboard);