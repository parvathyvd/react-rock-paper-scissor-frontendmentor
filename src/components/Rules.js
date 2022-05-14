import React from "react";
import rulesImage from "../images/image-rules.svg";
import close from "../images/icon-close.svg";

const Rules = ({ showRules, setShowRules }) => {
  const openRulesHandler = () => {
    console.log("open rules");
    setShowRules(true);
  };

  const onCloseHandler = () => {
    console.log("clicked close");
    setShowRules(false);
  };

  return (
    <div className="rules">
      {showRules && (
        <div className="backdrop">
          <img
            className="close"
            src={close}
            alt="close icon"
            onClick={onCloseHandler}
          />
          <img src={rulesImage} alt="rules" />
        </div>
      )}
      <p onClick={openRulesHandler}>Rules</p>
    </div>
  );
};

export default Rules;
