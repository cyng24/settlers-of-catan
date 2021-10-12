import React, { useState } from 'react';

const RobberPiece = (/*props*/) => {
    let [hasRobber, showRobber] = useState(false);
    const toggleRobber = () => {
      showRobber(!hasRobber);
    }

    return (
      <React.Fragment>
        <div className="tile-robber">
          <button className="button-robber" onClick={toggleRobber}>
            <span className={hasRobber ? "icon-robber material-icons md-40 visible" : "icon-robber material-icons md-40 invisible"}>face</span>
          </button>
        </div>
      </React.Fragment>
    )
}

export default RobberPiece;