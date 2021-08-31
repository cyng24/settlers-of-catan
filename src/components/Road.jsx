import React, { useState } from 'react';
import '../style.css';

const Road = (props) => {
    const divClass = "row tile-".concat(props.direction === "up" ? "full" : "half");
    const roadClass = "button-road rotate-".concat(props.direction);
    const colors = ['none', 'red', 'blue', 'orange', 'green'];

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