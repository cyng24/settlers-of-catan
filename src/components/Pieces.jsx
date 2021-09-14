import React from 'react'
import './main.css';
import City from './City.jsx';
import Road from './Road.jsx';
import Crossroad from './Crossroad.jsx';

  const Pieces = (props) => {
    return (
      <div className="abs-80">
        <div className="margin-topRow">
          <span className="d-flex justify-content-center piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="d-flex justify-content-center piece margin--5">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="d-flex justify-content-center piece margin--3">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="d-flex justify-content-center">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-row">
          <span className="d-flex justify-content-center piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="d-flex justify-content-center piece margin--5">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="d-flex justify-content-center piece margin--3">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="d-flex justify-content-center">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-row">
          <span className="d-flex justify-content-center piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="d-flex justify-content-center piece margin--5">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="d-flex justify-content-center piece margin--3">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="d-flex justify-content-center">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-row">
          <span className="d-flex justify-content-center piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="d-flex justify-content-center piece margin--5">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="d-flex justify-content-center piece margin--3">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="d-flex justify-content-center">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-row">
          <span className="d-flex justify-content-center piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="d-flex justify-content-center piece margin--5">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="d-flex justify-content-center piece margin--3">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
        <span className="d-flex justify-content-center">
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
          <Road direction="up" />
        </span>
        <div className="margin-row">
          <span className="d-flex justify-content-center piece">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
          <span className="d-flex justify-content-center piece margin--5">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="d-flex justify-content-center piece margin--3">
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
            <City addCity={props.addCity}/>
          </span>
        </div>
      </div>
    )
  }

export default Pieces;