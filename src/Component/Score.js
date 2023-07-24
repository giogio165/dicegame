import React from "react";

function Score({ currentPlayer, player1Score, player2Score }) {
  return (
    <div className="Score">
      {/* <div>{currentPlayer}</div> */}
      <div className="player-box">
        <div className={`player${currentPlayer === 1 ? "active" : "inactive"}`}>
          {player1Score}
        </div>
        <div className={`player${currentPlayer === 2 ? "active" : "inactive"}`}>
          {player2Score}
        </div>
      </div>
    </div>
  );
}

export default Score;
