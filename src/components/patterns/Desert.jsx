import React from 'react';

const Desert = (props) => {
    const { tileSize, polygonPoints, fontSize, textX } = props;
    return (
      <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <polygon points={polygonPoints} fill={props.hex}/>
          <circle 
            cx={tileSize/2} 
            cy={tileSize/2} 
            r={tileSize/6}
            fill={props.value === props.diceRoll ? props.hex : "white"} 
            stroke={props.value === props.diceRoll ? "white" : ""} 
            stroke-width={5}
          />
          <text 
            x={textX} 
            y={tileSize/2 + 5} 
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

export default Desert;