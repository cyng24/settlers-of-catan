import React from 'react';

const Mountain = (props) => {
  const { textX, value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps || props.cardProps;
  const width = props.tileProps ? size : size*2;
  const height = size;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-mtn" x="0" y="0" width=".35" height=".25">
              <rect x="0" y="0" width="60" height="30" fill={hex}/>
              <polygon points="20 0 30 10 10 10" fill="white" />
              <polygon points="12 8 28 8 40 20 0 20" fill="#dbdbdb" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-mtn)"/>
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

export default Mountain;