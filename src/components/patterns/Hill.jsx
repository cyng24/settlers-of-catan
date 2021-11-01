import React from 'react';

const Hill = (props) => {
  const { textX, value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps || props.cardProps;
  const width = props.tileProps ? size : size*2;
  const height = size;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-hill" x="0" y="0" width=".2" height=".1">
              <rect x="0" y="0" width="45" height="12" stroke="white" fill={hex}/>
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-hill)"/>
          <circle 
            cx={width/2} 
            cy={height/2} 
            r={width/6}
            fill={value === diceRoll ? hex : "white"} 
            stroke={value === diceRoll ? "white" : ""} 
            strokeWidth={5}
          />
          <text 
            x={textX} 
            y={height/2 + 5} 
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