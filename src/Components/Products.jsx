import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
function Products() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
          <h3>
      <span>Roses are red, violets are blue. The burger costs less than dinner for two</span>
          </h3>
      <div className="a-container">
        <Productbox image={pimage1} title="Luger Burger" />
        <Productbox image={pimage2} title="Le pigeon  Burger" />
        <Productbox image={pimage1} title="Luger Burger" />
      </div>
    </div>
  );
}

export default Products;
