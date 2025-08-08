import React, { useState } from "react";
import Title from "./Title";
import MenuList from "./MenuList";
function MinNavBar(props) {
  return (
    <div className="header">
      <div className="logo-title">
        <img
          className="logo"
          src="https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/b862f121-6489-40d0-af26-0b43f68870c8/design-previews/f945621b-67ff-4211-aaf3-796c65d59f79/1734719614711-transparentThumbnail.png"
        />
        <Title />
      </div>
      <MenuList handleItemClick={props.handleItemClick} tabno={props.tabno} />
    </div>
  );
}
export default MinNavBar;
