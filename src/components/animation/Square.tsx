import React from 'react';
import "../../style/Play.css";
interface SquareProps {
    value: string | null;
    onClick: () => void;
  }
  
  const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return (
      <button className={`square ${value === 'X' ? 'x-button' : value === 'O' ? 'o-button' : ''}`} onClick={onClick}>
        {value}
      </button>
    );
  };
  
  export default Square;