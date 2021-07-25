import React from "react";
import aboutimage from "../images/about.jpg";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
        it's a really good burger, it's juicy, meaty, greasily satisfying. The bun should be slightly crunchy on the outside and soft inside. The cheese should be happily melting over the meat.
         Ideally, the burger is charcoal grilled and the bun is lightly toasted.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About;
