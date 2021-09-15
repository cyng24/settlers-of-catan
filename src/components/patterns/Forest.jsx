import React from 'react';

const Forest = (props) => {
    const { tileSize, cardSize, polygonPoints, fontSize, textX } = props;
    const width = tileSize || cardSize*2 ;
    const height = tileSize || cardSize ;
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <defs>
            <pattern id="p-tree" x="0" y="0" width=".3" height=".3">
              <rect x="0" y="0" width="50" height="35" fill={props.hex}/>
              <polygon points="20 0 35 15 20 10 5 15" fill="white" />
              <polygon points="20 10 40 30 20 22 0 30" fill="white" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-tree)"/>
          <circle cx={width/2} cy={height/2} r={width/6} fill="white" />
          <text x={textX} y={height/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
      </React.Fragment> 
    )
}

export default Forest;