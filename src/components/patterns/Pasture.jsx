import React from 'react';

const Pasture = (props) => {
    const { tileSize, cardSize, polygonPoints, fontSize, textX } = props;
    const width = tileSize || cardSize*2 ;
    const height = tileSize || cardSize ;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-pasture" x="0" y="0" width=".25" height=".25">
              <rect x="0" y="0" width="50" height="50" fill={props.hex}/>
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
            cx={width/2} 
            cy={height/2} 
            r={width/6} 
            fill={props.value === props.diceRoll ? props.hex : "white"} 
            stroke={props.value === props.diceRoll ? "white" : ""} 
            stroke-width={5}
          />
          <text 
            x={textX} 
            y={height/2 + 5} 
            fontWeight="bold" 
            fontSize={fontSize} 
            fill={props.value === props.diceRoll ? "white" : "black"}
          >
            {props.value}
          </text>
        </svg>
      </React.Fragment>  
    )
}

export default Pasture;