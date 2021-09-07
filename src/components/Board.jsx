import React from 'react'
import './main.css';
import Tile from './Tile.jsx';
import Harbor from './Harbor.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        types: [],
        values: [],
        harbors: [],
        colors: props.colors
    };
  }
  
  componentDidMount() {
    const { green, red, yellow, brown, gray } = this.state.colors;
    const tileTypes = [{ red }, { red }, { red }, { brown }, { brown }, { brown }, { brown }, { gray }, { gray }, { gray }, { yellow }, { yellow }, { yellow }, { yellow }, { green }, { green }, { green }, { green }, null]
    const tileValues = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, "Ü"];
    const harborTypes = [`${red}|2:1`, `${brown}|2:1`, `${gray}|2:1`, `${yellow}|2:1`, `${green}|2:1`, '?|3:1', '?|3:1', '?|3:1', '?|3:1'];
    let types = this.randomize(tileTypes);
    let values = this.randomize(tileValues);
    let harbors = this.randomize(harborTypes);
    this.setState({ types, values, harbors });
  }

  randomize(val) {
    const len = val.length;
    let randomArray = [];
    for (let i=0; i<len; i++) {
      let newLen = val.length;
      let index = Math.floor(Math.random()*newLen);
      randomArray.push(val[index]);
      val = val.slice(0, index).concat(val.slice(index+1));
    }
    return randomArray;
  }
    
  render() {
    return (
      <div className="absolute">
        <span className="row board">
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[0]}/>
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[1]}/>
        </span>
        <span className="row board">
          <Harbor type={this.state.harbors[2]}/>
          <Tile type={this.state.types[0]} value={this.state.values[0]}/>
          <Tile type={this.state.types[1]} value={this.state.values[1]}/>
          <Tile type={this.state.types[2]} value={this.state.values[2]}/>
          <Harbor type={null}/>
        </span>
        <span className="row board">
          <Harbor type={null}/>
          <Tile type={this.state.types[3]} value={this.state.values[3]}/>
          <Tile type={this.state.types[4]} value={this.state.values[4]}/>
          <Tile type={this.state.types[5]} value={this.state.values[5]}/>
          <Tile type={this.state.types[6]} value={this.state.values[6]}/>
          <Harbor type={this.state.harbors[3]}/>
        </span>
        <span className="row board">
          <Harbor type={this.state.harbors[4]}/>
          <Tile type={this.state.types[7]} value={this.state.values[7]}/>
          <Tile type={this.state.types[8]} value={this.state.values[8]}/>
          <Tile type={this.state.types[9]} value={this.state.values[9]}/>
          <Tile type={this.state.types[10]} value={this.state.values[10]}/>
          <Tile type={this.state.types[11]} value={this.state.values[11]}/>
          <Harbor type={null}/>
        </span>
        <span className="row board">
          <Harbor type={null}/>
          <Tile type={this.state.types[12]} value={this.state.values[12]}/>
          <Tile type={this.state.types[13]} value={this.state.values[13]}/>
          <Tile type={this.state.types[14]} value={this.state.values[14]}/>
          <Tile type={this.state.types[15]} value={this.state.values[15]}/>
          <Harbor type={this.state.harbors[5]}/>
        </span>
        <span className="row board">
          <Harbor type={this.state.harbors[6]}/>
          <Tile type={this.state.types[16]} value={this.state.values[16]}/>
          <Tile type={this.state.types[17]} value={this.state.values[17]}/>
          <Tile type={this.state.types[18]} value={this.state.values[18]}/>
          <Harbor type={null}/>
        </span>
        <span className="row board">
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[7]}/>
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[8]}/>
        </span>
      </div>
    )
  }
}