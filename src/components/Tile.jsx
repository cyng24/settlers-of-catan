import React from 'react';
import '../style.css';

const Tile = (props) => {
  const textX = props.value > 9 ? "45" :"50";
  const color = (props.type) ? Object.keys(props.type)[0] : null;
  const hex = (props.type) ? props.type[color] : null;
  const forest = (
    <React.Fragment>
        <svg width="110" height="110">
          <defs>
            <pattern id="p-tree" x="0" y="0" width=".4" height=".3">
              <rect x="0" y="0" width="42" height="32" fill={hex}/>
              <polygon points="20 0 35 15 20 10 5 15" fill="white" />
              <polygon points="20 10 40 30 20 22 0 30" fill="white" />
            </pattern>
          </defs>

          <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" fill="url(#p-tree)"/>
          <circle cx="55" cy="50" r="15" fill="white" />
          <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const mountain = (
    <React.Fragment>
        <svg width="110" height="110">
          <defs>
            <pattern id="p-mtn" x="0" y="0" width=".4" height=".32">
              <rect x="0" y="0" width="42" height="35" fill={hex}/>
              <polygon points="20 0 30 10 10 10" fill="white" />
              <polygon points="12 8 28 8 40 20 0 20" fill="#dbdbdb" />
            </pattern>
          </defs>

          <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" fill="url(#p-mtn)"/>
          <circle cx="55" cy="50" r="15" fill="white" />
          <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const hill = (
    <React.Fragment>
        <svg width="110" height="110">
          <defs>
            <pattern id="p-hill" x="0" y="0" width=".3" height=".1">
              <rect x="0" y="0" width="30" height="10" stroke="white" fill={hex}/>
            </pattern>
          </defs>

          <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" fill="url(#p-hill)"/>
          <circle cx="55" cy="50" r="15" fill="white" />
          <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const field = (
    <React.Fragment>
        <svg width="110" height="110">
          <defs>
            <pattern id="p-field" x="0" y="0" width=".22" height=".47">
              <rect x="0" y="0" width="25" height="50" fill={hex}/>
              <polygon points="0 0 5 5 10 0 10 8 5 13 0 8" fill="white" />
              <polygon points="0 10 5 15 10 10 10 18 5 23 0 18" fill="white" />
              <polygon points="0 20 5 25 10 20 10 28 5 33 0 28" fill="white" />
              <rect x="5" y="30" width="1" height="20" fill="white" />
            </pattern>
          </defs>

          <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" fill="url(#p-field)"/>
          <circle cx="55" cy="50" r="15" fill="white" />
          <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const pasture = (
    <React.Fragment>
        <svg width="110" height="110">
          <defs>
            <pattern id="p-pasture" x="0" y="0" width=".25" height=".25">
              <rect x="0" y="0" width="30" height="30" fill={hex}/>
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

          <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" fill="url(#p-pasture)"/>
          <circle cx="55" cy="50" r="15" fill="white" />
          <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
        </svg>
    </React.Fragment>     
  );

  const desert = (
    <React.Fragment>
        <svg width="110" height="110">
          <polygon points="3 26 55 0 107 26 107 77 55 104 3 77" fill={hex}/>
          <circle cx="55" cy="50" r="15" fill="white" />
          <text x={textX} y="57" fontWeight="bold" fontSize="20px" fill="black">{props.value}</text>
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