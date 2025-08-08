import React from "react";
function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="details">
        <h1>{props.name}</h1>
        <h4>{props.event}</h4>
        <p>{props.current}</p>
      </div>
    </div>
  );
}
export default Card;
