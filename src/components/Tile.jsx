import React from 'react';
import '../style.css';

const Tile = (props) => {
  const textX = props.value > 9 ? "45" :"50";
  return (
    <div>
      <svg width="110" height="110">
        {/* <defs>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor={props.type}/>
            <stop offset="95%" stopColor="white"/>
          </linearGradient>
        </defs> 
        fill="url(#Gradient2)" */}
        <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" stroke="none" fill={props.type} />
        <circle cx="55" cy="50" r="15" stroke="none" fill="white" />
        <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
      </svg>
    </div>
  )
}

export default Tile;