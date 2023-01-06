import React from "react";
import { Link } from "react-router-dom";
import iconPaper from "../images/icon-paper.svg";
import iconRock from "../images/icon-rock.svg";
import iconScissors from "../images/icon-scissors.svg";
import bgTriangle from "../images/bg-triangle.svg";

const Game = ({ myChoiceSetupHandler }) => {
  const onClickHandler = (e) => {
    let actualSelection;
    // console.log("target is", e.target);

    let actualElement = e.target.closest(".choiceSelection");
    actualSelection = actualElement.dataset.id;
    // console.log("actualSelection", actualSelection);

    myChoiceSetupHandler(actualSelection);
  };
  return (
    <div className="game">
      <div className="game-bg">
        <img src={bgTriangle} alt="traingle" />
      </div>
      <div className="paper-scissor">
        <Link to="/result">
          <div
            className="paper choiceSelection"
            data-id="paper"
            onClick={onClickHandler}
          >
            <div className="wrapper-img">
              <img src={iconPaper} alt="Paper" />
            </div>
          </div>
        </Link>
        <Link to="/result">
          <div
            className="scissors choiceSelection"
            data-id="scissors"
            onClick={onClickHandler}
          >
            <div className="wrapper-img">
              <img src={iconScissors} alt="Scissors" />
            </div>
          </div>
        </Link>
      </div>
      <Link to="/result">
        <div
          className="rock choiceSelection"
          data-id="rock"
          onClick={onClickHandler}
        >
          <div className="wrapper-img">
            <img src={iconRock} alt="Rock" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
