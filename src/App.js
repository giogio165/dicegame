import { useState } from "react";
import "./App.css";
import Dice from "./Component/Dice";
import Score from "./Component/Score";

function App() {
  // useState
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [isHoldDisabled, setIsHoldDisabled] = useState(false);

  //주사위 돌려
  const diceValue = Math.floor(Math.random() * 6) + 1;

  // 점수 업데이트
  const updatedScore =
    currentPlayer === 1 ? player1Score + diceValue : player2Score + diceValue;

  // 게임홀드
  const holdGame = () => {
    setIsHoldDisabled(true);
    if (currentPlayer === 1) {
      setPlayer1Score(updatedScore);
    } else {
      setPlayer2Score(updatedScore);
    }
    switchPlayer();
    setIsHoldDisabled(false);
  };

  const switchPlayer = () => {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
    } else if (currentPlayer === 2) {
      setCurrentPlayer(1);
    }
  };

  // 게임 플레이
  const diceRoll = () => {
    if (diceValue < 3) {
      if (currentPlayer === 1) {
        setPlayer1Score(0);
      } else if (currentPlayer === 2) {
        setPlayer2Score(0);
      }
      switchPlayer();
    } else {
      if (isHoldDisabled === true) {
        holdGame();
      } else {
        currentPlayer === 1
          ? setPlayer1Score(updatedScore)
          : setPlayer2Score(updatedScore);

        // 점수 50되면 리셋하기
        if (player1Score === 50 || player2Score === 50) {
          setPlayer1Score(0) && setPlayer2Score(0);
        }
      }
    }
  };

  return (
    <div className="App">
      <Score
        currentPlayer={currentPlayer}
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <Dice
        diceRoll={diceRoll}
        currentPlayer={currentPlayer}
        diceValue={diceValue}
        holdGame={holdGame}
      />
    </div>
  );
}

export default App;
