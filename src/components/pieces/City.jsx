import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/component.css';

const City = (props) => {
  const citySize = props.tileSize/6;

  let [settlementColor, changeSettlementColor] = useState('none');
  const toggleColor = () => {
      settlementColor = settlementColor === 'none' ? props.player : 'none';
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
              <circle cx={citySize/2} cy={citySize/2} r={citySize/2} stroke="white" fill={settlementColor} />
          </svg>
        </button>
        <button className="button-house city-icon" style={{width: props.tileSize/4 + 'px'}} onClick={props.addCity ? toggleCity : toggleColor}>
          <span className={"material-icons md-16 " + (isCity ? "md-white" : "transparent")}>location_city</span>
        </button>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    player: state.player,
    colors: state.cityColors,
    tileSize: state.tileProps.size
  };
};

export default connect(mapState)(City);