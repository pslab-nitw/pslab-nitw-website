import React, { useState, useEffect, useRef } from "react";
import Tab from "./Tab";
import TabNameList from "./TabNameList";
function TabList(props) {
  const listRef = useRef([]);
  useEffect(() => {
    if (listRef.current[props.tabno]) {
      listRef.current[props.tabno].classList.add("green-item");
      return () => {
        listRef.current[props.tabno]?.classList.remove("green-item");
      };
    }
  }, [props.tabno]);
  return (
    <ul className="tab-list">
      {TabNameList.map((item, index) => (
        <Tab
          key={index}
          id={index}
          ref={(el) => (listRef.current[index] = el)}
          content={item}
          onItemClick={props.handleItemClick}
        />
      ))}
    </ul>
  );
}
export default TabList;
