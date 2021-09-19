import React from 'react';

const Forest = (props) => {
    const { tileSize, cardSize, polygonPoints, fontSize, textX } = props;
    const width = tileSize || cardSize*2 ;
    const height = tileSize || cardSize ;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-tree" x="0" y="0" width=".3" height=".4">
              <rect x="0" y="0" width="50" height="50" fill={props.hex}/>
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

export default Forest;