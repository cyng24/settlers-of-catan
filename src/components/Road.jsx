import React, { useState } from 'react';
import '../style.css';

const Road = (props) => {
  const green = '#009900';
  const red = '#cc0000';
  const yellow = '#f9c119';
  const blue = '#1919ff';
  const colors = ['none', red, blue, yellow, green];
  const divClass = "row tile-".concat(props.direction === "up" ? "full" : "half");
  const roadClass = "button-road rotate-".concat(props.direction);

  let [roadColor, changeRoadColor] = useState(0);
  const toggleColor = () => {
      roadColor = roadColor === 4 ? 0 : roadColor + 1;
      changeRoadColor(roadColor);
  }

  return (
    <div className={divClass}>
      <button className={roadClass} onClick={toggleColor}>
          <svg width="35" height="15">
              <polygon points="0 0 35 0 35 15 0 15" stroke="white" fill={colors[roadColor]}/>
          </svg>
      </button>
    </div>
  )
}

export default Road;