import React from "react";

const Header = ({ score }) => {
  return (
    <header>
      <div className="heading">
        <h1 className="main-heading">
          <span>Rock</span>
          <span>paper</span>
          <span>scissors</span>
        </h1>
      </div>
      <div className="score">
        <h5>score</h5>
        <span>{score}</span>
      </div>
    </header>
  );
};

export default Header;
