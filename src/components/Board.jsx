import React from 'react'
import './styles/main.css';
import { connect } from 'react-redux';
import Tile from './Tile.jsx';
import Harbor from './Harbor.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        types: props.types,
        values: props.values,
        harbors: props.harbors,
    };
  }
    
  render() {
    return (
      <div className="board-placement">
        <span className="d-flex justify-content-center board">
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[0]}/>
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[1]}/>
        </span>
        <span className="d-flex justify-content-center board">
          <Harbor type={this.state.harbors[2]}/>
          <Tile type={this.state.types[0]} value={this.state.values[0]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[1]} value={this.state.values[1]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[2]} value={this.state.values[2]} diceRoll={this.props.diceRoll} />
          <Harbor type={null}/>
        </span>
        <span className="d-flex justify-content-center board">
          <Harbor type={null}/>
          <Tile type={this.state.types[3]} value={this.state.values[3]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[4]} value={this.state.values[4]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[5]} value={this.state.values[5]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[6]} value={this.state.values[6]} diceRoll={this.props.diceRoll} />
          <Harbor type={this.state.harbors[3]}/>
        </span>
        <span className="d-flex justify-content-center board">
          <Harbor type={this.state.harbors[4]}/>
          <Tile type={this.state.types[7]} value={this.state.values[7]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[8]} value={this.state.values[8]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[9]} value={this.state.values[9]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[10]} value={this.state.values[10]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[11]} value={this.state.values[11]} diceRoll={this.props.diceRoll} />
          <Harbor type={null}/>
        </span>
        <span className="d-flex justify-content-center board">
          <Harbor type={null}/>
          <Tile type={this.state.types[12]} value={this.state.values[12]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[13]} value={this.state.values[13]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[14]} value={this.state.values[14]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[15]} value={this.state.values[15]} diceRoll={this.props.diceRoll} />
          <Harbor type={this.state.harbors[5]}/>
        </span>
        <span className="d-flex justify-content-center board">
          <Harbor type={this.state.harbors[6]}/>
          <Tile type={this.state.types[16]} value={this.state.values[16]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[17]} value={this.state.values[17]} diceRoll={this.props.diceRoll} />
          <Tile type={this.state.types[18]} value={this.state.values[18]} diceRoll={this.props.diceRoll} />
          <Harbor type={null}/>
        </span>
        <span className="d-flex justify-content-center board">
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[7]}/>
          <Harbor type={null}/>
          <Harbor type={this.state.harbors[8]}/>
        </span>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    types: state.types,
    values: state.values,
    harbors: state.harbors,
  };
};

// const mapDispatch = dispatch => {
//   return {
//     getSomething: () => {
//       return dispatch(fetchSomething());
//     }
//   };
// };

export default connect(mapState/*, mapDispatch*/)(Board);