import React, { forwardRef } from "react";
const Tab = forwardRef((props, ref) => {
  return (
    <li
      className="tab-name"
      ref={ref}
      onClick={() => {
        props.onItemClick(props.id);
      }}
    >
      {props.content}
    </li>
  );
});
export default Tab;
