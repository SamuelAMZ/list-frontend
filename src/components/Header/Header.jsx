import React from "react";

const Header = ({ page }) => {
  return (
    <div className="header-container">
      <div className="header-elm">
        {/* hello */}
        <h2>{page}</h2>
        {/* new btn */}
        <a href="/app/new">
          <button className="btn btn-primary">New Ad</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
