import React from 'react'
import '../style.css';
import City from './City.jsx';
import Road from './Road.jsx';
import Crossroad from './Crossroad.jsx';

export default class Pieces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addCity: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const change = !this.state.addCity
    this.setState({ addCity: change });
  }
    
  render() {
    return (
        <div className="absolute">
        <button className="absolute" onClick={this.handleChange}>Add City</button>
        <div className="margin-40">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
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
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
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
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
            <Crossroad direction={["left", "right"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
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
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
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
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
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
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
            <Crossroad direction={["right", "left"]} />
          </span>
          <span className="row piece margin--20">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
      </div>
    )
  }
}