import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

const DisplayResult = ({
  score,
  setScore,
  myChoice,
  houseChoice,
  setHouseChoice,
  setMyChoice,
  playAgainHandler,
}) => {
  const [text, setText] = useState("");
  const [win, setWin] = useState("");
  const navigate = useNavigate();

  const getResult = useCallback(() => {
    console.log(
      `here is my choice ${myChoice} and house choice is ${houseChoice}`
    );
    if (myChoice === "rock" && houseChoice === "scissors") {
      setScore(score + 1);
      setText("You win");
      setWin(true);
    } else if (myChoice === "rock" && houseChoice === "paper") {
      setScore(score - 1);
      setText("You Loose");
      setWin(false);
    } else if (myChoice === "scissors" && houseChoice === "paper") {
      setScore(score + 1);
      setText("You win");
      setWin(true);
    } else if (myChoice === "scissors" && houseChoice === "rock") {
      setScore(score - 1);
      setText("You Loose");
      setWin(false);
    } else if (myChoice === "paper" && houseChoice === "scissors") {
      setScore(score - 1);
      setText("You Loose");
      setWin(false);
    } else if (myChoice === "paper" && houseChoice === "rock") {
      setScore(score + 1);
      setText("You win");
      setWin(true);
    } else {
      setText("Draw");
      setWin("");
    }
  }, []);
  useEffect(() => {
    getResult();
  }, [houseChoice, getResult]);

  let imgMySrc = "";
  if (myChoice === "rock") {
    imgMySrc = rock;
  } else if (myChoice === "paper") {
    imgMySrc = paper;
  } else {
    imgMySrc = scissors;
  }
  let imgHouseSrc = "";
  if (houseChoice === "rock") {
    imgHouseSrc = rock;
  } else if (houseChoice === "paper") {
    imgHouseSrc = paper;
  } else {
    imgHouseSrc = scissors;
  }
  const onPlayAgainHandler = () => {
    console.log("Play again");
    playAgainHandler();
    navigate("/");
  };

  return (
    <div className="display-result">
      <div className="paper-scissor-lg">
        <div className="myChoice-block">
          <h3>You picked</h3>
          <div
            className={`${myChoice} ${
              win === true && text !== "Draw" ? "selected" : ""
            }`}
          >
            <div className="wrapper-img">
              <img data-id={myChoice} src={imgMySrc} alt={myChoice} />
            </div>
          </div>
        </div>
        <div className="reset mobile-hide">
          <h1 className="status-text">{text}</h1>
          <button className="play-again" onClick={onPlayAgainHandler}>
            Play Again
          </button>
        </div>
        <div className="houseChoice-block">
          <h3>House picked</h3>
          <div
            className={`${houseChoice}  ${
              win === false && text !== "Draw" ? "selected" : ""
            }`}
          >
            <div className="wrapper-img">
              <img data-id={houseChoice} src={imgHouseSrc} alt={houseChoice} />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-hide display-mobile">
        <h1 className="status-text">{text}</h1>
        <button className="play-again" onClick={onPlayAgainHandler}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default DisplayResult;
