import React from 'react';

const Forest = (props) => {
  const { textX, value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps || props.cardProps;
  const width = props.tileProps ? size : size*2;
  const height = size;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-tree" x="0" y="0" width=".3" height=".4">
              <rect x="0" y="0" width="50" height="50" fill={hex}/>
              <polygon points="15 0 27 15 15 10 3 15" fill="white" />
              <polygon points="15 10 30 30 15 22 0 30" fill="white" />
              <rect x="12" y="20" width="5" height="10" fill="white" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-tree)"/>
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

export default Forest;