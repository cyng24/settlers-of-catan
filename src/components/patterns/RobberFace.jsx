import React from 'react';

const RobberFace = (props) => {
  const hasRobber = props.index === props.robberIndex;
  const robberClass = "icon-robber material-icons md-40" + (hasRobber ? " visible" : " invisible");

  return (
    <React.Fragment>
      <div className="tile-robber">
        <button className="p-10" onClick={() => props.changeRobber(props.index)}>
          <span className={robberClass}>face</span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default RobberFace;