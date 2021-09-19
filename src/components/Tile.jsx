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

  function placeRobber() {
    console.log('ROBBER')
  };

  if (color === 'gray') {
    return (
      <div>
        <button className={props.value ? "d-none" : "button-robber"} onClick={placeRobber}>
          <span className="material-icons md-40">face</span>
        </button>
        <Mountain tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
      </div>
    )
  }
  else if (color === 'brown') {
    return (
      <div>
        <button className={props.value ? "d-none" : "button-robber"} onClick={placeRobber}>
          <span className="material-icons md-40">face</span>
        </button>
        <Forest tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
      </div>
    )
  }
  else if (color === 'red') {
    return (
      <div>
        <button className={props.value ? "d-none" : "button-robber"} onClick={placeRobber}>
          <span className="material-icons md-40">face</span>
        </button>
        <Hill tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
      </div>
    )
  }
  else if (color === 'yellow') {
    return (
      <div>
        <button className={props.value ? "d-none" : "button-robber"} onClick={placeRobber}>
          <span className="material-icons md-40">face</span>
        </button>
        <Field tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
      </div>
    )
  }
  else if (color === 'green') {
    return (
      <div>
        <button className={props.value ? "d-none" : "button-robber"} onClick={placeRobber}>
          <span className="material-icons md-40">face</span>
        </button>
        <Pasture tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
      </div>
    )
  }
  else {
    return (
      <div>
        <button className={props.value ? "d-none" : "button-robber"} onClick={placeRobber}>
          <span className="material-icons md-40">face</span>
        </button>
        <Desert tileSize={tileSize} polygonPoints={polygonPoints} fontSize={fontSize} textX={textX} hex={hex} value={props.value} diceRoll={props.diceRoll} />
      </div>
    )
  }
}

export default Tile;