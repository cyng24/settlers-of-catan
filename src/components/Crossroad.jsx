import React from 'react';
import '../style.css';
import Road from './Road.jsx';

const Crossroad = (props) => {
    return (
      <div className="tile-full relative road">
        <Road direction={props.direction[0]} />
        <Road direction={props.direction[1]} />
      </div>
  )
}

export default Crossroad;