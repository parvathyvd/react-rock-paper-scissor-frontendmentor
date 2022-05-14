import React from "react";
import { Link } from "react-router-dom";
import iconPaper from "../images/icon-paper.svg";
import iconRock from "../images/icon-rock.svg";
import iconScissors from "../images/icon-scissors.svg";
import bgTriangle from "../images/bg-triangle.svg";

const Game = ({ myChoiceSetupHandler }) => {
  const onClickHandler = (e) => {
    console.log("target is", e.target.parentElement);
    let actualSelection;
    if (e.target.classList.contains("wrapper-img")) {
      actualSelection = e.target.parentElement.dataset.id;
      console.log(
        'inside e.target.parentElement.classList.contains("wrapper-img")',
        actualSelection
      );
    } else if (e.target.parentElement.parentElement.hasAttribute("data-id")) {
      actualSelection = e.target.parentElement.parentElement.dataset.id;
      console.log(
        "inside e.target.parentElement.parentElement",
        actualSelection
      );
    } else actualSelection = e.target.dataset.id;
    myChoiceSetupHandler(actualSelection);
  };
  return (
    <div className="game">
      <div className="game-bg">
        <img src={bgTriangle} alt="traingle" />
      </div>
      <div className="paper-scissor">
        <Link to="/result">
          <div className="paper" data-id="paper" onClick={onClickHandler}>
            <div className="wrapper-img">
              <img src={iconPaper} alt="Paper" />
            </div>
          </div>
        </Link>
        <Link to="/result">
          <div className="scissors" data-id="scissors">
            <div className="wrapper-img">
              <img src={iconScissors} onClick={onClickHandler} alt="Scissors" />
            </div>
          </div>
        </Link>
      </div>
      <Link to="/result">
        <div className="rock" data-id="rock">
          <div className="wrapper-img">
            <img src={iconRock} onClick={onClickHandler} alt="Rock" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
