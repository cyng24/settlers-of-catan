import React from 'react';

const Card = (props) => {
  const remove = () => props.removeCard(props.children.type.name);
  const add = () => props.addCard(props.children.type.name);

  return (
    <div className="d-flex">
      <button onClick={remove}>
        <span className="material-icons">remove_circle_outline</span>
      </button>
        {props.children}
      <button onClick={add}>
        <span className="material-icons">control_point</span>
      </button>
    </div>
  )
}

export default Card;