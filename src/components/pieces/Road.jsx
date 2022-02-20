import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/component.css';

const tileSize = 120;
const width = (tileSize/5)-10;
const height = (tileSize/5)+10
const polygonPoints = `0 0 ${width} 0 ${width} ${height} 0 ${height}`;

const Road = (props) => {
  const divClass = "d-flex justify-content-center tile-".concat(props.direction === "up" ? "full" : "half");
  const roadClass = "m-0 p-0 rotate-".concat(props.direction);

  let [roadColor, changeRoadColor] = useState('none');
  const toggleColor = () => {
      roadColor = roadColor === 'none' ? props.player : 'none';
      changeRoadColor(roadColor);
  }

  return (
    <div className={divClass}>
      <button className={roadClass} onClick={toggleColor}>
          <svg width={width} height={height}>
              <polygon points={polygonPoints} stroke="white" fill={roadColor}/>
          </svg>
      </button>
    </div>
  )
}

const mapState = (state) => {
  return {
    player: state.player,
    colors: state.cityColors,
  };
};

export default connect(mapState)(Road);