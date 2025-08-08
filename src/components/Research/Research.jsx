import React, { useEffect } from "react";
function Research(props) {
  return (
    <div className="research">
      <img src="https://static.wixstatic.com/media/ad420a_3b006b1796864b55a868c034291349c3~mv2.jpg/v1/fill/w_1699,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_3b006b1796864b55a868c034291349c3~mv2.jpg" />
      <div className="title">
        <h1>Our Research & Initiatives</h1>
        <p>
          Welcome to the Leishmania Cell Culture Laboratory at the National
          Institute of Technology, Warangal. We are dedicated to advancing
          knowledge in the field of Leishmania research through our initiatives
          and collaborations. Our team is committed to conducting impactful
          research that contributes to the scientific community's understanding
          of Leishmania and its implications for public health.
        </p>
      </div>
      <div className="description">
        <p>
          As a prominent research lab, we take pride in our team's expertise and
          our state-of-the-art facilities. Our focus is not only on conducting
          high-quality research but also on fostering a collaborative and
          engaging environment for scholars and professionals in the field.
          Through our dedication to excellence, we strive to make significant
          contributions to the global fight against Leishmania.
        </p>
      </div>
      <button className="explore-btn" onClick={() => props.handleClick(3)}>
        Explore Our Publications
      </button>
      <div className="transparent"></div>
    </div>
  );
}
export default Research;
