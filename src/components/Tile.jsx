import React from 'react';
import './styles/component.css';
import Forest from './patterns/Forest.jsx';
import Mountain from './patterns/Mountain.jsx';
import Hill from './patterns/Hill.jsx';
import Field from './patterns/Field.jsx';
import Pasture from './patterns/Pasture.jsx';
import Desert from './patterns/Desert.jsx';

const tileSize = 120;
const margin = 4;
const polygonPoints = `${0+margin} ${((tileSize/3)-10)+(margin/2)} ${tileSize/2} ${0+margin} ${tileSize-margin} ${((tileSize/3)-10)+(margin/2)} ${tileSize-margin} ${(2*(tileSize/3)+10)-(margin/2)} ${tileSize/2} ${tileSize-margin} ${0+margin} ${(2*(tileSize/3)+10)-(margin/2)}`;
const fontSize = `${tileSize/8}px`

const Tile = (props) => {
  const textX = props.value > 9 ? tileSize/2 - 9 : tileSize/2 - 5;
  const color = (props.type) ? Object.keys(props.type)[0] : null;
  const hex = (props.type) ? props.type[color] : null;

  if (color === 'gray') {
    return (
        <Mountain tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'brown') {
    return (
        <Forest tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'red') {
    return (
        <Hill tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'yellow') {
    return (
        <Field tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else if (color === 'green') {
    return (
        <Pasture tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
  else {
    return (
        <Desert tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
    )
  }
}

export default Tile;