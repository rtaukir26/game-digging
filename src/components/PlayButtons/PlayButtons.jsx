import React from "react";

const PlayButtons = ({ handleLeftBtn }) => {
  return (
    <div className="play-buttons-con">
      <button className="btn-left" onKeyDown={handleLeftBtn}>
        left
      </button>
      <button className="btn-top">top</button>
      <button className="btn-right">right</button>
      <button className="btn-bottom">bottom</button>
    </div>
  );
};

export default PlayButtons;
