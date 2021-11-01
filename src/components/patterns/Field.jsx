import React from 'react';

const Field = (props) => {
  const { textX, value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps || props.cardProps;
  const width = props.tileProps ? size : size*2;
  const height = size;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-field" x="0" y="0" width=".2" height=".5">
              <rect x="0" y="0" width="35" height="60" fill={hex}/>
              <polygon points="0 0 5 5 10 0 10 8 5 13 0 8" fill="white" />
              <polygon points="0 10 5 15 10 10 10 18 5 23 0 18" fill="white" />
              <polygon points="0 20 5 25 10 20 10 28 5 33 0 28" fill="white" />
              <rect x="5" y="30" width="1" height="20" fill="white" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-field)"/>
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

export default Field;