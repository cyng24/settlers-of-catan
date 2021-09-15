import React from 'react';

const Hill = (props) => {
    const { tileSize, cardSize, polygonPoints, fontSize, textX } = props;
    const width = tileSize || cardSize*2 ;
    const height = tileSize || cardSize ;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-hill" x="0" y="0" width=".2" height=".1">
              <rect x="0" y="0" width="45" height="12" stroke="white" fill={props.hex}/>
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-hill)"/>
          <circle cx={width/2} cy={height/2} r={width/6} fill="white" />
          <text x={textX} y={height/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
      </React.Fragment> 
    )
}

export default Hill;