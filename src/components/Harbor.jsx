import React from 'react';
import './component.css';

const Harbor = (props) => {
    let propArray = props.type ? props.type.split('|') : ['white', null];
  return (
    <div>
      <svg width="110" height="110">
        <circle cx="50" cy="50" r="15" stroke="none" fill={propArray[0]} />
        <text x="43" y="54" fontWeight="bold" fontSize="10px" fill="white">{propArray[1]}</text>
      </svg>
    </div>
  )
}

export default Harbor;