import React from "react";
import ImgList from "./ImgList";

function Gallery() {
  return (
    <div className="gallery-container">
      {ImgList.map((imgname, index) => (
        <img
          key={index}
          src={`/images/${imgname}`}
          alt={imgname}
          style={{ width: "400px", margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default Gallery;
