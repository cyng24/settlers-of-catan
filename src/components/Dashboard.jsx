import React from 'react'
import '../style.css';

const Dashboard = (props) => {
  const { green, red, yellow, brown, gray } = props.colors;

  return (
    <div className="dashboard">
      <button className="margin-10" onClick={console.log('ROLL')}>Roll the dice</button>
      <button className="margin-10" onClick={props.cityToggle}>Add City</button>
      <svg className="margin-10" width="100%" height="60">
        <rect x="0" y="0" width="100%" height="60" fill={green}/>
        <circle cx="56" cy="20" r="12" fill="white" />
        <circle cx="64" cy="20" r="12" fill="white" />
        <circle cx="50" cy="30" r="12" fill="white" />
        <circle cx="70" cy="30" r="12" fill="white" />
        <circle cx="56" cy="40" r="12" fill="white" />
        <circle cx="64" cy="40" r="12" fill="white" />
        <rect x="48" y="22" width="24" height="4" fill="#dbdbdb" />
        <circle cx="60" cy="30" r="10" fill="#dbdbdb" />
      </svg>
      <svg className="margin-10" width="100%" height="60">
        <rect x="0" y="0" width="100%" height="60" fill={red} />
        <rect x="20%" y="15" width="60%" height="30" stroke="white" strokeWidth="2" fill={red}/>
      </svg>
      <svg className="margin-10" width="100%" height="60">
        <rect x="0" y="0" width="120" height="60" fill={brown}/>
        <polygon points="60 0 85 25 60 20 35 25" fill="white" />
        <polygon points="60 20 95 50 60 37 25 50" fill="white" />
      </svg>
      <svg className="margin-10" width="100%" height="60">
        <rect x="0" y="0" width="100%" height="60" fill={yellow}/>
        <polygon points="50 0 60 10 70 0 70 13 60 23 50 13" fill="white" />
        <polygon points="50 15 60 25 70 15 70 28 60 38 50 28" fill="white" />
        <polygon points="50 30 60 40 70 30 70 43 60 53 50 43" fill="white" />
        <rect x="60" y="30" width="1" height="30" fill="white" />
      </svg>
      <svg className="margin-10" width="100%" height="60">
        <rect x="0" y="0" width="100%" height="60" fill={gray}/>
        <polygon points="60 15 78 35 42 35" fill="white" />
        <polygon points="42 35 78 35 100 60 20 60" fill="#dbdbdb" />
      </svg>
      <svg className="margin-10" width="100%" height="60">
        <rect x="0" y="0" width="100%" height="60" stroke="black" fill="none" />
      </svg>
    </div>
  )
}

export default Dashboard;