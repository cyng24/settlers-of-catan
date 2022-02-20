import React from 'react';

const Bank = (props) => {
  const { value, hex } = props;
  const { fontSize, size } = props.cardProps;
  const textX = value > 9 ? size*0.75 - 9 : size*0.75 - 5;

    return (
      <React.Fragment>
        <svg width={1.5*size} height={size}>
          <rect x="4" y="4" width={1.5*size-8} height={size-8} stroke="none" fill={hex} />
          <circle 
            cx={size*0.75} 
            cy={size/2} 
            r={size/4}
            fill="white"
            stroke="none" 
            strokeWidth={5}
          />
          <text 
            x={textX} 
            y={size/2 + 5} 
            fontSize={fontSize} 
            fill="black"
          >
            {value}
          </text>
        </svg>
      </React.Fragment>  
    )
}

export default Bank;