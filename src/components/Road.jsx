import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles/component.css';

const tileSize = 120;
const width = (tileSize/5)-10;
const height = (tileSize/5)+10
const polygonPoints = `0 0 ${width} 0 ${width} ${height} 0 ${height}`;

const Road = (props) => {
  const divClass = "d-flex justify-content-center tile-".concat(props.direction === "up" ? "full" : "half");
  const roadClass = "m-0 p-0 rotate-".concat(props.direction);

  let [roadColor, changeRoadColor] = useState(0);
  const toggleColor = () => {
      roadColor = roadColor === 4 ? 0 : roadColor + 1;
      changeRoadColor(roadColor);
  }

  return (
    <div className={divClass}>
      <button className={roadClass} onClick={toggleColor}>
          <svg width={width} height={height}>
              <polygon points={polygonPoints} stroke="white" fill={props.colors[roadColor]}/>
          </svg>
      </button>
    </div>
  )
}

const mapState = (state) => {
  return {
    colors: state.cityColors,
  };
};

export default connect(mapState)(Road);