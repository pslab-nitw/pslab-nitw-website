import React, { useState, useEffect } from "react";
import MaxNavBar from "./MaxNavBar";
import MinNavBar from "./MinNavBar";
function NavBar(props) {
  const [listMenuRequired, setListMenuRequirement] = useState(
    window.innerWidth <= 1124
  );
  function handleResize() {
    const temp = window.innerWidth <= 1124;
    setListMenuRequirement((prev) => {
      return temp !== prev ? temp : prev;
    });
    if (temp !== listMenuRequired) {
      setListMenuRequirement(temp);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return listMenuRequired ? (
    <MinNavBar handleItemClick={props.handleItemClick} tabno={props.tabno} />
  ) : (
    <MaxNavBar handleItemClick={props.handleItemClick} tabno={props.tabno} />
  );
}
export default NavBar;
