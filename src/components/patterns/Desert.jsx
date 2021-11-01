import React from 'react';

const Desert = (props) => {
  const { textX, value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps;
    return (
      <React.Fragment>
        <svg width={size} height={size}>
          <polygon points={polygonPoints} fill={hex}/>
          <circle 
            cx={size/2} 
            cy={size/2} 
            r={size/6}
            fill={value === diceRoll ? hex : "white"} 
            stroke={value === diceRoll ? "white" : ""} 
            strokeWidth={5}
          />
          <text 
            x={textX} 
            y={size/2 + 5} 
            fontWeight="bold" 
            fontSize={fontSize} 
            fill={value === diceRoll ? "white" : "black"}
          >
            {value}
          </text>
        </svg>
      </React.Fragment> 
    )
}

export default Desert;