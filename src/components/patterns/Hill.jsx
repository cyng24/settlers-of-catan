import React from 'react';

const Hill = (props) => {
  const { value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps || props.cardProps;
  const textX = value > 9 ? size/2 - 9 :size/2 - 5;

    return (
      <React.Fragment>
        <svg width={size} height={size}>
          <defs>
            <pattern id="p-hill" x="0" y="0" width=".2" height=".1">
              <rect x="0" y="0" width="45" height="12" stroke="white" fill={hex}/>
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-hill)"/>
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

export default Hill;