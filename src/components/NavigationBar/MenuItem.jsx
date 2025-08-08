import React, { forwardRef } from "react";
const MenuItem = forwardRef((props, ref) => {
  return (
    <li
      ref={ref}
      className="tab-name"
      onClick={() => {
        props.onItemClick(props.id);
      }}
    >
      {props.content}
    </li>
  );
});
export default MenuItem;
