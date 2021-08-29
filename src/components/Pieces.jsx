import React from 'react'
import '../style.css';
import City from './City.jsx';

export default class Pieces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addCity: true };
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
        <div className="margin-top">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
        <div className="margin-top">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
        <div className="margin-top">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
        <div className="margin-top">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
        <div className="margin-top">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
        <div className="margin-top">
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
          <span className="row piece">
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
            <City addCity={this.state.addCity}/>
          </span>
        </div>
      </div>
    )
  }
}