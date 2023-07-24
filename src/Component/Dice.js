import React from "react";

const Dice = ({ diceRoll, holdGame, diceValue }) => {
  const getDiceClassName = (diceValue) => {
    return `dice${diceValue}`;
  };

  return (
    <div className="Dice">
      <div className={`${getDiceClassName(diceValue)}`}></div>
      <div className="button-box">
        <button className="roll-dice-btn" onClick={() => diceRoll()}>
          Start
        </button>
        {diceValue > 2 ? (
          <button
            className="roll-dice-btn"
            onClick={() => {
              holdGame();
            }}
          >
            Hold
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dice;
