import React from 'react';
import '../App.css';

const Harbor = (props) => {
    let propArray = props.type ? props.type.split('|') : ['white', null];
  return (
    <div>
      <svg width="140" height="140">
        <circle cx="65" cy="65" r="20" stroke="none" fill={propArray[0]} />
        <text x="55" y="75" fontWeight="bold" fontSize="10px" fontColor="white" fill="black">{propArray[1]}</text>
      </svg>
    </div>
  )
}

export default Harbor;

//