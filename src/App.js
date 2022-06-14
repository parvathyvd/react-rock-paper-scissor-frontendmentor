import "./App.css";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayResult from "./components/DisplayResult";
import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [myChoice, setMyChoice] = useState("");
  const [showRules, setShowRules] = useState(false);

  const choiceArr = ["rock", "paper", "scissors"];

  const [houseChoice, setHouseChoice] = useState(() => {
    return choiceArr[Math.floor(Math.random() * 3)];
  });
  const pickHouseChoice = () => {
    setHouseChoice(choiceArr[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    pickHouseChoice();
  }, [houseChoice]);

  const myChoiceSetupHandler = (choice) => {
    setMyChoice(choice);
  };
  const playAgainHandler = () => {
    setHouseChoice(choiceArr[Math.floor(Math.random() * 3)]);
  };
  return (
    <>
      <Header score={score} />
      <Router>
        <main>
          <Routes>
            <Route
              path="/"
              exact
              element={<Game myChoiceSetupHandler={myChoiceSetupHandler} />}
            ></Route>
            <Route
              path="/result"
              element={
                <DisplayResult
                  score={score}
                  setScore={setScore}
                  myChoice={myChoice}
                  houseChoice={houseChoice}
                  playAgainHandler={playAgainHandler}
                />
              }
            ></Route>
          </Routes>
        </main>
        <Rules showRules={showRules} setShowRules={setShowRules} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
