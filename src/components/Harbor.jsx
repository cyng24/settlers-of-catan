import React from 'react';
import './component.css';

const tileSize = 120;
const fontSize = `${tileSize/10}px`;

const Harbor = (props) => {
    let propArray = props.type ? props.type.split('|') : ['white', null];
  return (
    <div>
      <svg width={tileSize} height={tileSize}>
        <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} stroke="none" fill={propArray[0]} />
        <text x={tileSize/2 - 9} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="white">{propArray[1]}</text>
      </svg>
    </div>
  )
}

export default Harbor;