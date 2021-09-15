import React from 'react';
import './component.css';

const tileSize = 120;
const margin = 4;
const polygonPoints = `${0+margin} ${((tileSize/3)-10)+(margin/2)} ${tileSize/2} ${0+margin} ${tileSize-margin} ${((tileSize/3)-10)+(margin/2)} ${tileSize-margin} ${(2*(tileSize/3)+10)-(margin/2)} ${tileSize/2} ${tileSize-margin} ${0+margin} ${(2*(tileSize/3)+10)-(margin/2)}`;
const fontSize = `${tileSize/8}px`

const Tile = (props) => {
  const textX = props.value > 9 ? tileSize/2 - 9 : tileSize/2 - 5;
  const color = (props.type) ? Object.keys(props.type)[0] : null;
  const hex = (props.type) ? props.type[color] : null;
  const forest = (
    <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <defs>
            <pattern id="p-tree" x="0" y="0" width=".25" height=".2">
              <rect x="0" y="0" width="45" height="30" fill={hex}/>
              <polygon points="20 0 35 15 20 10 5 15" fill="white" />
              <polygon points="20 10 40 30 20 22 0 30" fill="white" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-tree)"/>
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const mountain = (
    <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <defs>
            <pattern id="p-mtn" x="0" y="0" width=".35" height=".2">
              <rect x="0" y="0" width="50" height="30" fill={hex}/>
              <polygon points="20 0 30 10 10 10" fill="white" />
              <polygon points="12 8 28 8 40 20 0 20" fill="#dbdbdb" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-mtn)"/>
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const hill = (
    <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <defs>
            <pattern id="p-hill" x="0" y="0" width=".3" height=".1">
              <rect x="0" y="0" width="40" height="12" stroke="white" fill={hex}/>
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-hill)"/>
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const field = (
    <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <defs>
            <pattern id="p-field" x="0" y="0" width=".15" height=".4">
              <rect x="0" y="0" width="30" height="60" fill={hex}/>
              <polygon points="0 0 5 5 10 0 10 8 5 13 0 8" fill="white" />
              <polygon points="0 10 5 15 10 10 10 18 5 23 0 18" fill="white" />
              <polygon points="0 20 5 25 10 20 10 28 5 33 0 28" fill="white" />
              <rect x="5" y="30" width="1" height="20" fill="white" />
            </pattern>
          </defs>

          <polygon points={polygonPoints} fill="url(#p-field)"/>
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const pasture = (
    <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <defs>
            <pattern id="p-pasture" x="0" y="0" width=".25" height=".25">
              <rect x="0" y="0" width="40" height="40" fill={hex}/>
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
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const desert = (
    <React.Fragment>
        <svg width={tileSize} height={tileSize}>
          <polygon points={polygonPoints} fill={hex}/>
          <circle cx={tileSize/2} cy={tileSize/2} r={tileSize/6} fill="white" />
          <text x={textX} y={tileSize/2 + 5} fontWeight="bold" fontSize={fontSize} fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  if (color === 'gray') {
    return (
      <div>
        {mountain}
      </div>
    )
  }
  else if (color === 'brown') {
    return (
      <div>
        {forest}
      </div>
    )
  }
  else if (color === 'red') {
    return (
      <div>
        {hill}
      </div>
    )
  }
  else if (color === 'yellow') {
    return (
      <div>
        {field}
      </div>
    )
  }
  else if (color === 'green') {
    return (
      <div>
        {pasture}
      </div>
    )
  }
  else {
    return (
      <div>
        {desert}
      </div>
    )
  }
}

export default Tile;