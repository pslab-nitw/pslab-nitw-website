import React from "react";
function SinglePublication(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.authors}</h2>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.source}
      </a>
    </div>
  );
}
export default SinglePublication;
