import React from "react";
import Card from "./Card";
import List from "./List";
function Alumni() {
  return (
    <div className="alumni">
      <div className="title">
        <h1>Alumni</h1>
      </div>
      <div className="flex-container">
        {List.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            event={item.event}
            current={item.current}
          />
        ))}
      </div>
    </div>
  );
}
export default Alumni;
