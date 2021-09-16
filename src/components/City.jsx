import React, { useState } from 'react';
import './styles/component.css';

const green = '#009900';
const red = '#cc0000';
const yellow = '#f2b706';
const blue = '#1919ff';
const colors = ['none', red, blue, yellow, green];

const tileSize = 120;
const citySize = tileSize/6;

const City = (props) => {
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
      <div className="position-relative">
        <button className="button-house">
          <svg width={citySize} height={citySize}>
              <circle cx={citySize/2} cy={citySize/2} r={citySize/2} stroke="white" fill={colors[settlementColor]} />
          </svg>
        </button>
        <button className="button-house city-icon" style={{width: tileSize/4 + 'px'}} onClick={props.addCity ? toggleCity : toggleColor}>
          <span className={"material-icons md-16 " + (isCity ? "md-white" : "transparent")}>location_city</span>
        </button>
      </div>
    </div>
  )
}

export default City;