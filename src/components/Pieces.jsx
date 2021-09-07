import React from 'react'
import './main.css';
import City from './City.jsx';
import Road from './Road.jsx';
import Crossroad from './Crossroad.jsx';

  const Pieces = (props) => {
    return (
      <div className="absolute">
        <div className="margin-40">
          <span className="row piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="row">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-10">
          <span className="row piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="row">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-10">
          <span className="row piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="row">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-10">
          <span className="row piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="row">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-10">
          <span className="row piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="row">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-10">
          <span className="row piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
      </div>
    )
  }

export default Pieces;