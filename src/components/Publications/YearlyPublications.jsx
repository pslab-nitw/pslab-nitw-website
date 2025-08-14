import { useState } from "react";
import SinglePublication from "./SinglePublication";
function YearlyPublications(props) {
  const [isClicked, setIsClicked] = useState(false);
  function manageClick() {
    setIsClicked((prev) => prev != true);
  }
  return (
    <div
      className="list-container"
      style={{ backgroundColor: "rgba(245, 245, 245, 0.7)" }}
    >
      <h1
        onClick={manageClick}
        className="year"
      >
        {props.year}
      </h1>
      <ol style={{ maxHeight: isClicked ? "100000px" : "0" }}>
        {props.publications.map((item, index) => (
          <li key={index}>
            <SinglePublication
              title={item.title}
              authors={item.authors}
              source={item.source}
              link={item.link}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
export default YearlyPublications;
