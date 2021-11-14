import React from 'react';

const Pasture = (props) => {
  const { value, hex, diceRoll } = props;
  const { polygonPoints, fontSize, size } = props.tileProps || props.cardProps;
  const textX = value > 9 ? size/2 - 9 :size/2 - 5;

    return (
      <React.Fragment>
        <svg width={size} height={size}>
          <defs>
            <pattern id="p-pasture" x="0" y="0" width=".3" height=".25">
              <rect x="0" y="0" width="50" height="50" fill={hex}/>
              <circle cx="10" cy="5" r="5" fill="white" />
              <circle cx="16" cy="5" r="5" fill="white" />
              <circle cx="7" cy="10" r="5" fill="white" />
              <circle cx="19" cy="10" r="5" fill="white" />
              <circle cx="10" cy="15" r="5" fill="white" />
              <circle cx="16" cy="15" r="5" fill="white" />
              <rect x="7" y="5" width="12" height="2" fill="#dbdbdb" />
              <circle cx="13" cy="10" r="5" fill="#dbdbdb" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-pasture)"/>
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

export default Pasture;