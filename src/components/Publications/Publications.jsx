import React from "react";
import YearlyPublications from "./YearlyPublications";
import List from "./List";
function Publications() {
  return (
    <div className="publications">
      <img src="https://static.wixstatic.com/media/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg/v1/fill/w_1699,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg" />
      <div className="title">
        <h1>Publications</h1>
      </div>
      <div className="list">
        {List.map((item, index) => (
          <YearlyPublications
            key={index}
            year={item.year}
            publications={item.publications}
          />
        ))}
      </div>
    </div>
  );
}
export default Publications;
