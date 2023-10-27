import React from 'react';
import './ButtonMove.css'; 


function ButtonMove({ resetGame }) {
  return (
    <div className="button-container">
      <button className="move-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}



export default ButtonMove;
