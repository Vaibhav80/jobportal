import React from "react";

import { clearSelectedJob } from "./store";

function Header() {
  const handleLogoClick = () => {
    clearSelectedJob();
    window.route("/");
  };

  return (
    <div id="main-header">
      <div id="header-content" className="app-container">
        <h1 id="app-logo" onClick={handleLogoClick}>
          Job Search Portal
        </h1>
      </div>
    </div>
  );
}

export default Header;
