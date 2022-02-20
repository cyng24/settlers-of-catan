import React from 'react';
import { connect } from 'react-redux';
import '../styles/component.css';

const Harbor = (props) => {
    let propArray = props.type ? props.type.split('|') : ['white', null];
  return (
    <div>
      <svg width={props.tileSize} height={props.tileSize}>
        <circle cx={props.tileSize/2} cy={props.tileSize/2} r={props.tileSize/6} stroke="none" fill={propArray[0]} />
        <text x={props.tileSize/2 - 9} y={props.tileSize/2 + 5} fontWeight="bold" fontSize={props.fontSize} fill="white">{propArray[1]}</text>
      </svg>
    </div>
  )
}

const mapState = (state) => {
  return {
    tileSize: state.tileProps.size,
    fontSize: state.tileProps.fontSize
  };
};

export default connect(mapState)(Harbor);