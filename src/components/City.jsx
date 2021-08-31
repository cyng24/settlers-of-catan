import React, { useState } from 'react';
import '../style.css';

const City = (props) => {
  const colors = ['none', 'red', 'blue', 'orange', 'green'];
  
  let [settlementColor, changeSettlementColor] = useState(0);
  const toggleColor = () => {
      settlementColor = settlementColor === 4 ? 0 : settlementColor+1;
      changeSettlementColor(settlementColor);
  }

  let [isCity, changeCity] = useState(false);
  const toggleCity = () => {
      changeCity(!isCity);
  }

  return (
    <div className="tile-full">
      <div className="relative">
        <button className="button-city">
          <svg width="20" height="24">
              <circle cx="10" cy="11" r="10" stroke="white" fill={colors[settlementColor]} />
          </svg>
        </button>
        <button  className="button-city" onClick={props.addCity ? toggleCity : toggleColor}>
          <svg width="20" height="24">
              <polygon points="10 5 4 15 16 15" stroke="none" fill={isCity ? "white" : "none"}/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default City;