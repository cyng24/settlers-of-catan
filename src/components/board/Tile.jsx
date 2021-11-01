import React from 'react';
import { connect } from 'react-redux';
import '../styles/component.css';
import Forest from '../patterns/Forest.jsx';
import Mountain from '../patterns/Mountain.jsx';
import Hill from '../patterns/Hill.jsx';
import Field from '../patterns/Field.jsx';
import Pasture from '../patterns/Pasture.jsx';
import Desert from '../patterns/Desert.jsx';

const Tile = (props) => {
  const textX = props.value > 9 ? props.tileProps.size/2 - 9 : props.tileProps.size/2 - 5;
  const color = (props.type) ? Object.keys(props.type)[0] : null;
  const hex = (props.type) ? props.type[color] : null;

  if (color === 'gray') {
    return (
        <Mountain tileProps={props.tileProps} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'brown') {
    return (
        <Forest tileProps={props.tileProps} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'red') {
    return (
        <Hill tileProps={props.tileProps} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'yellow') {
    return (
        <Field tileProps={props.tileProps} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'green') {
    return (
        <Pasture tileProps={props.tileProps} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else {
    return (
        <Desert tileProps={props.tileProps} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
}

const mapState = (state) => {
  return {
    tileProps: state.tileProps
  };
};

export default connect(mapState)(Tile);