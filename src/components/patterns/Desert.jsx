import React from 'react';

const Desert = (props) => {
    const { tileSize, polygonPoints, fontSize, textX } = props;
    return (
      <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <polygon points={polygonPoints} fill={props.hex}/>
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
      </React.Fragment> 
    )
}

export default Desert;