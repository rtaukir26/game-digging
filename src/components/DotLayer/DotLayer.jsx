import React, { useMemo, useState } from "react";
const generateDotPositions = () =>
  Array.from({ length: DOT_STONE }, () => {
    // const noOfDots = Math.floor(Math.random() * DOT_STONE);
    // const randomDots = Array.from({ length: noOfDots }, () =>
    //   Math.floor(Math.random() * DOT_STONE),
    // );
    const leftPos = Array.from({ length: DOT_STONE }, () =>
      Math.floor(Math.random() * 50),
    );
    const topPos = Array.from({ length: DOT_STONE }, () =>
      Math.floor(Math.random() * 50),
    );
    const width = Array.from({ length: DOT_STONE }, () =>
      Math.floor(Math.random() * 30),
    );
    const height = Array.from({ length: DOT_STONE }, () =>
      Math.floor(Math.random() * 22),
    );
    // const leftPoss = Math.floor(Math.random() * 100);

    return { leftPos, topPos, width, height };
  });

const DOT_STONE = 300;
const DotLayer = () => {
  const [dotPositions] = useState(generateDotPositions());
  console.log("dotPositions", dotPositions);

  const dots = useMemo(
    () =>
      Array.from({ length: DOT_STONE }, (_, i) => {
        return (
          <span
            className="dot"
            style={{
              left: dotPositions[i]?.leftPos[i] + "%",
              top: dotPositions[i]?.topPos[i] + "%",
              width: dotPositions[i]?.width[i] + "px",
              height: dotPositions[i]?.height[i] + "px",
            }}
            key={i}
            // className={`dot-span ${
            //   dotPositions[i]?.randomDots?.includes(j) && "dot"
            // }`}
            data-stone-id={`dot${i}`}
            id={`dot${i}`}
          ></span>
        );
      }),
    [],
  );
  return (
    <div className="dot-layer">
      <div className="dot-body">{dots}</div>
    </div>
  );
};

export default DotLayer;
