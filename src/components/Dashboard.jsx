import React from 'react'
import './main.css';
import Forest from './patterns/Forest.jsx';
import Mountain from './patterns/Mountain.jsx';
import Hill from './patterns/Hill.jsx';
import Field from './patterns/Field.jsx';
import Pasture from './patterns/Pasture.jsx';

const Dashboard = (props) => {
  const { green, red, yellow, brown, gray } = props.colors;
  const cityActive = props.addCity ? 'button-dash active' : 'button-dash';
  const cardSize = 80;
  const polygonPoints = `0 0 ${cardSize*2} 0 ${cardSize*2} ${cardSize} 0 ${cardSize}`;

  return (
    <div className="dashboard">
      <div className="d-flex justify-content-around my-2" style={{width: '160px'}}>
        <button className="button-dash" onClick={console.log('ROLL')}>
          <span className="material-icons">casino</span>
        </button>
        <button className={cityActive} onClick={props.cityToggle}>
          <span className="material-icons">location_city</span>
        </button>
      </div>
      <Pasture cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={green} value={0} />
      <Hill cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={red} value={0} />
      <Forest cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={brown} value={0} />
      <Field cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={yellow} value={0} />
      <Mountain cardSize={cardSize} polygonPoints={polygonPoints} fontSize={15} textX={cardSize-5} hex={gray} value={0} />
      <svg width={cardSize*2} height={cardSize}>
        <rect x="0" y="0" width={cardSize*2} height={cardSize} stroke="black" fill="none" />
      </svg>
    </div>
  )
}

export default Dashboard;