import React from 'react'
import '../style.css';
import Tile from './Tile.jsx';
import Harbor from './Harbor.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        types: [],
        values: [],
        harbors: []
    };
  }

  componentDidMount() {
    const tileTypes = ['rgb(200, 100, 100)', 'rgb(200, 100, 100)', 'rgb(200, 100, 100)', 'rgb(100, 50, 20)', 'rgb(100, 50, 20)', 'rgb(100, 50, 20)', 'rgb(100, 50, 20)', 'gray', 'gray', 'gray', 'rgb(250, 200, 50)', 'rgb(250, 200, 50)', 'rgb(250, 200, 50)', 'rgb(250, 200, 50)', 'rgb(150, 200, 150)', 'rgb(150, 200, 150)', 'rgb(150, 200, 150)', 'rgb(150, 200, 150)', null]
    const tileValues = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, null];
    const harborTypes = ['rgb(200, 100, 100)|2:1', 'rgb(100, 50, 20)|2:1', 'gray|2:1', 'rgb(250, 200, 50)|2:1', 'rgb(150, 200, 150)|2:1', '?|3:1', '?|3:1', '?|3:1', '?|3:1'];
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