import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import './styles/main.css';
import BankCard from './patterns/BankCard.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.roll = props.roll.bind(this);
    this.cityToggle = props.cityToggle.bind(this);
  }
    
  render() {
    const bankProps = this.props.bankProps;
    const tileColors = this.props.tileColors;
    const playerOptions = this.props.cityColors.map((color) => {
      return(
      <Dropdown.Item as="button" key={color} onClick={() => this.props.changePlayer(color)}> 
        <span className="material-icons md-30" style={{color: color}}>accessibility</span>
      </Dropdown.Item>
      )
    });

    return (
    <div className="d-flex m-3">
      <DropdownButton 
        className="me-3" 
        variant="light" 
        id="dropdown-item-button" 
        title={<span className="material-icons md-30" style={{color: this.props.player}}>accessibility</span>}>
          {playerOptions}
      </DropdownButton>

      <div className="d-flex">
        <button className={"button-dash" + (this.props.addCity ? " active" : "")} onClick={this.cityToggle}>
          <span className="material-icons md-30">location_city</span>
        </button>
        <button className="button-dash d-flex align-items-center" onClick={this.roll}>
          <span className="material-icons md-30">casino</span>
          <span className="lead">{this.props.diceRoll}</span>
        </button>
      </div>
      <BankCard cardProps={bankProps} hex={tileColors.green} value={bankProps.values.pasture} />
      <BankCard cardProps={bankProps} hex={tileColors.red} value={bankProps.values.hill} />
      <BankCard cardProps={bankProps} hex={tileColors.brown} value={bankProps.values.forest} />
      <BankCard cardProps={bankProps} hex={tileColors.yellow} value={bankProps.values.field} />
      <BankCard cardProps={bankProps} hex={tileColors.gray} value={bankProps.values.mountain} />
      <svg width={bankProps.size} height={bankProps.size}>
        <rect x="4" y="4" width={bankProps.size-8} height={bankProps.size-8} stroke="black" fill="none" />
      </svg>
    </div>
  )}
}

const mapState = (state) => {
  return {
    player: state.player,
    cityColors: state.cityColors.slice(1),
    tileColors: state.tileColors,
    bankProps: state.bankProps
  };
};

const mapDispatch = (dispatch) => {
  return {
    changePlayer: (color) => dispatch({ type: 'changePlayer', player: color })
  }
};

export default connect(mapState, mapDispatch)(Dashboard);