import React from 'react';
import '../App.css';

const Tile = (props) => {
  return (
    <div>
      <svg width="140" height="140">
        <polygon points="0 30 65 0 130 30 130 100 65 130 0 100"stroke="none" fill={props.type}/>
        <circle cx="65" cy="65" r="20" stroke="none" fill="white" />
        <text x="55" y="75" fontWeight="bold" fontSize="30px" fill="black">{props.value}</text>
      </svg>
    </div>
  )
}

export default Tile;