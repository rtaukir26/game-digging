import { useEffect, useMemo, useRef, useState } from "react";
import WireWorms from "../../components/Characters/WireWorms/WireWorms";
import Surface from "../../components/Surface/Surface";
import WaterWave from "../../components/TestComp/WaterWave";
import { allImages } from "../../utils/images";
import ScoreComp from "../../components/ScoreComp/ScoreComp";
import { HIGHEST_SCORE } from "../../constant/constant";
import CharHeathStatus from "../../components/CharHeathStatus/CharHeathStatus";
/** Score formula
    50 row = 1m (metre)
    1 row = 0.02 m --->  m/total rows, 1/50 = 0.02m

    15 step = 0.02m ---> 0.02/15 = 0.00133m
    1 step = 0.00133m
 
 */
const INITIAL_METRE = 0.02;
const generateRowsData = () =>
  Array.from({ length: ROWS }, () => {
    const randomZero = Math.floor(Math.random() * 2);
    const noOfStones = Math.floor(Math.random() * 7 * randomZero);
    const randomHardStone = Array.from({ length: noOfStones }, () =>
      Math.floor(Math.random() * STONES_PER_ROW),
    );
    return { noOfStones, randomHardStone };
  });
const generateDotPositions = () =>
  Array.from({ length: STONES_PER_ROW }, () => {
    const noOfDots = Math.floor(Math.random() * STONES_PER_ROW);
    const randomDots = Array.from({ length: noOfDots }, () =>
      Math.floor(Math.random() * STONES_PER_ROW),
    );
    const leftPos = Array.from({ length: randomDots?.length }, () =>
      Math.floor(Math.random() * 100),
    );
    const topPos = Array.from({ length: randomDots?.length }, () =>
      Math.floor(Math.random() * 100),
    );
    const width = Array.from({ length: randomDots?.length }, () =>
      Math.floor(Math.random() * 30),
    );
    const height = Array.from({ length: randomDots?.length }, () =>
      Math.floor(Math.random() * 22),
    );
    // const leftPoss = Math.floor(Math.random() * 100);

    return { noOfDots, randomDots, leftPos, topPos, width, height };
  });

const ROWS = 50;
const STONES_PER_ROW = 50;
const STONES_WIDTH = 14;
const ROW_HEIGHT = 30; // px, must match the row height in CSS
const CHAR_HEIGHT = 30; // px, height of your character
const CHAR_WIDTH = 30;
const STEP_TB = 2; //ForTop and Bottom Step in (px)
const STEP_LR = 2; //For left and right step in px)
const EXTRA_VALUE = 0;
const ADJUST_VALUE = 6.5;

const GameScreen = () => {
  const [mainCharPosition, setMainCharPosition] = useState({
    left: 360,
    top: 0,
    right: "auto",
    bottom: "auto",
  });
  const currentRow = Math.floor(mainCharPosition.top / ROW_HEIGHT) + 1;
  const currentStone = Math.floor(
    (mainCharPosition.left + ADJUST_VALUE) / STONES_WIDTH,
  );
  const containerRef = useRef(null);
  const charRef = useRef(null); // needs to point at MainChar's DOM element
  const [hardStones] = useState(generateRowsData());
  const [dotPositions] = useState(generateDotPositions());
  const touchedRef = useRef([]);
  const lastSafeRef = useRef(mainCharPosition);

  const [score, setScore] = useState(0);
  const [HighestScore, setHighestScore] = useState(
    localStorage.getItem(HIGHEST_SCORE) || 0,
  );
  const [health, setHealth] = useState(100);

  console.log("mainCharPosition", mainCharPosition);
  console.log("currRow", currentRow);
  console.log("currentStone", currentStone);
  console.log("score", score);
  //   console.log("hardStones", hardStones);
  //   console.log("dotPositions", dotPositions);

  //Stones per row
  const rows = useMemo(
    () =>
      Array.from({ length: ROWS }, (_, i) => {
        return (
          <p key={i} className="row" data-row-id={i}>
            {i}
            {Array.from({ length: STONES_PER_ROW }, (_, j) => {
              const currStone =
                hardStones[i]?.randomHardStone.includes(j) && j + 1;
              return (
                <span
                  key={j}
                  //   className={`stone  ${
                  //     i > 1 &&
                  //     hardStones[i]?.randomHardStone.includes(j) &&
                  //     "hard-stone"
                  //   }`}
                  className={`stone ${
                    i > 1 &&
                    (hardStones[i]?.randomHardStone.includes(j) ||
                      hardStones[i]?.randomHardStone.includes(j - 1))
                      ? "hard-stone"
                      : ""
                  }`}
                  data-stone-id={`stone${j}`}
                  id={`stone${j}`}
                >
                  {/* {j} */}
                  {/* {i > 1 && hardStones[i]?.randomHardStone.includes(j) && (
                    <img src={allImages.imgStoneIcon} alt="stone-img" />
                  )} */}
                </span>
              );
            })}
          </p>
        );
      }),
    [hardStones, dotPositions],
  );
  //Main Char moving
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!e.key.startsWith("Arrow")) return;
      e.preventDefault(); // stop the page from scrolling
      setMainCharPosition((prev) => {
        switch (e.key) {
          case "ArrowLeft":
            return { ...prev, left: prev.left - STEP_LR };
          case "ArrowRight":
            return { ...prev, left: prev.left + STEP_LR };
          case "ArrowUp":
            return { ...prev, top: prev.top - STEP_TB };
          case "ArrowDown":
            return {
              ...prev,
              top: prev.top + STEP_TB,
            };
          default:
            return prev; // same object, so no re-render
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  //Change stone bg color when main char moves
  useEffect(() => {
    getCurrentPosition();
  }, [currentRow, currentStone]);

  //Get main char position
  const getCurrentPosition = () => {
    // clear stone_touched from the PREVIOUS block only (background stays)
    touchedRef.current.forEach((el) => el.classList.remove("stone_touched"));

    const stoneEle1 = containerRef.current.querySelector(
      `[data-row-id="${currentRow}"] [data-stone-id="stone${currentStone}"]`,
    );
    const stoneEle2 = containerRef.current.querySelector(
      `[data-row-id="${currentRow}"] [data-stone-id="stone${currentStone - 1}"]`,
    );
    const stoneEle3 = containerRef.current.querySelector(
      `[data-row-id="${currentRow}"] [data-stone-id="stone${currentStone + 1}"]`,
    );
    const stoneEle4 = containerRef.current.querySelector(
      `[data-row-id="${currentRow - 1}"] [data-stone-id="stone${currentStone}"]`,
    );
    const stoneEle5 = containerRef.current.querySelector(
      `[data-row-id="${currentRow - 1}"] [data-stone-id="stone${currentStone - 1}"]`,
    );
    const stoneEle6 = containerRef.current.querySelector(
      `[data-row-id="${currentRow - 1}"] [data-stone-id="stone${currentStone + 1}"]`,
    );

    const next = [];
    [stoneEle1, stoneEle2, stoneEle3, stoneEle4, stoneEle5, stoneEle6].forEach(
      (el) => {
        if (el) {
          el.style.background = "#5d3f0a";
          el.classList.add("stone_touched");
          next.push(el);
        }
      },
    );
    // if (next[4]) next[4].style.borderRadius = "40px 0 0 0"; // top-left corner
    // if (next[5]) next[5].style.borderRadius = "0 40px 0 0"; // top-right corner
    // if (next[1]) next[1].style.borderRadius = "0 0 0 40px"; // bottom-left corner
    // if (next[2]) next[2].style.borderRadius = "0 0 40px 0"; // bottom-right corner
    touchedRef.current = next;
  };

  // Hit. Main char stops if touch hard stone and reduce health
  useEffect(() => {
    const hit = containerRef.current.querySelector(".stone_touched.hard-stone");
    // const stepBack = lastSafeRef.current;
    if (hit) {
      setMainCharPosition(lastSafeRef.current); // hard stone touched: go back
      setHealth((pre) => pre - 0.2);
    } else {
      lastSafeRef.current = mainCharPosition; // safe: remember this spot
    }
  }, [mainCharPosition]);

  const SCROLL_MARGIN = 100; // px from the bottom before it starts scrolling

  // Scroll when reaches to bottom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const charBottom = mainCharPosition.top + CHAR_HEIGHT;
    const visibleBottom = container.scrollTop + container.clientHeight;

    if (charBottom > visibleBottom - SCROLL_MARGIN) {
      container.scrollTop = charBottom - container.clientHeight + SCROLL_MARGIN;
    }

    // also scroll up if moving toward the top
    const visibleTop = container.scrollTop;
    if (mainCharPosition.top < visibleTop + SCROLL_MARGIN) {
      container.scrollTop = Math.max(0, mainCharPosition.top - SCROLL_MARGIN);
    }
  }, [mainCharPosition.top]);

  //Score
  useEffect(() => {
    const highestScore = localStorage.getItem(HIGHEST_SCORE);

    const currScore = (
      ((mainCharPosition.top / STEP_TB) * INITIAL_METRE) /
      15
    ).toFixed(4);

    if (currScore > highestScore) {
      localStorage.setItem(HIGHEST_SCORE, currScore);
      setHighestScore(currScore);
    }

    setScore(currScore > 0 ? currScore : 0.0);
  }, [mainCharPosition.top]);
  return (
    <div className="game-screen">
      <div className="score-container">
        <ScoreComp score={score} HighestScore={HighestScore} health={health} />
      </div>
      <div className="surface-con">
        <Surface />
      </div>
      <div className="play-container" ref={containerRef}>
        <CharHeathStatus />
        {/* Main character */}
        <div
          className="main-char"
          ref={charRef}
          style={{
            left: `${mainCharPosition.left}px`,
            top: `${mainCharPosition.top}px`,
            right: mainCharPosition.right,
            bottom: mainCharPosition.bottom,
          }}
        >
          <div className="char-body">
            {/* <img src={allImages.mainAntIcon} alt="main-ant" /> */}
          </div>
        </div>

        <WaterWave />
        {rows}
        {/** Insects   */}
        {/* <WireWorms /> */}
      </div>
    </div>
  );
};

export default GameScreen;
