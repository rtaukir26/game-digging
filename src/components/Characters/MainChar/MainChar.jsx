import React from "react";

const MainChar = ({ mainCharPosition }) => {
  return (
    <div
      className="main-char"
      style={{
        left: `${mainCharPosition.left}%`,
        top: `${mainCharPosition.top}px`,
        right: mainCharPosition.right,
        bottom: mainCharPosition.bottom,
      }}
    >
      <div className="char-body"></div>
    </div>
  );
};

export default MainChar;
