import React from 'react'
import '../style.css';

const Dashboard = (props) => {
  const tileTypes = ['#c86464', '#643214', 'gray', '#fac832', '#96c896']

    return (
      <div className="dashboard">
        <button className="margin-10" onClick={console.log('ROLL')}>Roll the dice</button>
        <button className="margin-10" onClick={props.cityToggle}>Add City</button>
        <svg className="margin-10" width="120" height="60">
          <polygon points="0 0 0 60 120 60 120 0" stroke="none" fill={tileTypes[0]} />
        </svg>
        <svg className="margin-10" width="120" height="60">
          <polygon points="0 0 0 60 120 60 120 0" stroke="none" fill={tileTypes[1]} />
        </svg>
        <svg className="margin-10" width="120" height="60">
          <polygon points="0 0 0 60 120 60 120 0" stroke="none" fill={tileTypes[2]} />
        </svg>
        <svg className="margin-10" width="120" height="60">
          <polygon points="0 0 0 60 120 60 120 0" stroke="none" fill={tileTypes[3]} />
        </svg>
        <svg className="margin-10" width="120" height="60">
          <polygon points="0 0 0 60 120 60 120 0" stroke="none" fill={tileTypes[4]} />
        </svg>
        <svg className="margin-10" width="120" height="60">
          <polygon points="0 0 0 60 120 60 120 0" stroke="black" fill="none" />
        </svg>
      </div>
    )
}

export default Dashboard;