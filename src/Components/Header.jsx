import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>DISCOVER THE NEW TASTE OF THE BURGER</h3>
        <h1>
          <span>BURGER</span> FOR
          <br /> WEEK
        </h1>
        <p className="details">
        Feeling hungry? It’s burger time. Yes, the burger is the best snack when people
         feel hungry and want to have some tasty food. 
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
