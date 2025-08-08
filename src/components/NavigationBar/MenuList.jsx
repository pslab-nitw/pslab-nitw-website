import React, { useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import TabNameList from "./TabNameList";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function MenuList(props) {
  const listRef = useRef([]);
  const menuRef = useRef(null);
  const fabRef = useRef(null);
  const [isDisplaying, setDisplaying] = useState(false);
  function handleMenuClick() {
    if (menuRef.current && isDisplaying) {
      fabRef.current.style.animation = "0.5s buttonRotate-90";
      menuRef.current.style.animationName = "slideInToRight";
      setTimeout(() => {
        setDisplaying(!isDisplaying);
        fabRef.current.style.animation = "";
      }, 500);
    } else {
      fabRef.current.style.animation = "0.5s buttonRotate90";
      setTimeout(() => {
        fabRef.current.style.animation = "";
      }, 500);
      setDisplaying(!isDisplaying);
    }
  }
  function handleItemClick(index) {
    props.handleItemClick(index);
    handleMenuClick();
  }
  useEffect(() => {
    if (listRef.current[props.tabno]) {
      listRef.current[props.tabno].classList.add("green-item");
      return () => {
        listRef.current[props.tabno]?.classList.remove("green-item");
      };
    }
  }, [isDisplaying, props.tabno]);
  return (
    <>
      <Zoom in={true} appear={true}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleMenuClick}
          className="fab-button"
          ref={(el) => (fabRef.current = el)}
        >
          {isDisplaying ? <CloseIcon /> : <MenuIcon />}
        </Fab>
      </Zoom>
      {isDisplaying && (
        <div className="menu" ref={(el) => (menuRef.current = el)}>
          <ul className="menu-list">
            {TabNameList.map((item, index) => (
              <MenuItem
                key={index}
                id={index}
                ref={(el) => (listRef.current[index] = el)}
                content={item}
                onItemClick={handleItemClick}
              />
            ))}
          </ul>
        </div>
      )}
      {isDisplaying && (
        <div
          className="overlay"
          onClick={() => {
            handleMenuClick();
          }}
        ></div>
      )}
    </>
  );
}
export default MenuList;
