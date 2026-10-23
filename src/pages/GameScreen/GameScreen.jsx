import { useEffect, useMemo, useRef, useState } from "react";
import WireWorms from "../../components/Characters/WireWorms/WireWorms";
import Surface from "../../components/Surface/Surface";
import WaterWave from "../../components/TestComp/WaterWave";
import { allImages } from "../../utils/images";
import ScoreComp from "../../components/ScoreComp/ScoreComp";
import {
  ALL_GAME_CHARACTERS,
  HIGHEST_REWARD,
  HIGHEST_SCORE,
  insectClass,
} from "../../constant/constant";
import CharHeathStatus from "../../components/CharHeathStatus/CharHeathStatus";
import CharBody from "../../components/Characters/CharBody/CharBody";
import RewardPopup from "../../components/ReactModals/RewardPopup/RewardPopup";
import WormsContainer from "../../components/Characters/WireWorms/WormsContainer";
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

const getRandomData = (num = 100) => {
  const d = Array.from({ length: num }).map((_, i) =>
    Math.floor(Math.random() * 100),
  );

  return d;
};

const GameScreen = () => {
  const [randomData] = useState(getRandomData());

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
  const touchedRef = useRef([]);
  const lastSafeRef = useRef(mainCharPosition);
  const [hardStones] = useState(generateRowsData());
  // const [dotPositions] = useState(generateDotPositions());

  const [score, setScore] = useState(0); //deep distance
  const [HighestScore, setHighestScore] = useState(
    localStorage.getItem(HIGHEST_SCORE) || 0,
  );
  const [health, setHealth] = useState(100);
  const [moveDirection, setMoveDirection] = useState("ArrowDown");
  const [rewards, setRewards] = useState(
    Number(localStorage.getItem(HIGHEST_REWARD)) || 0,
  ); //total points/rewards added

  console.log("mainCharPosition", mainCharPosition);

  //Stones per row
  const rows = useMemo(
    () =>
      Array.from({ length: ROWS }, (_, i) => {
        return (
          <p key={i} className="row" data-row-id={i}>
            {/* {i} */}
            {Array.from({ length: STONES_PER_ROW }, (_, j) => {
              return (
                <span
                  key={j}
                  className={`stone ${
                    i > 1 &&
                    (hardStones[i]?.randomHardStone.includes(j) ||
                      hardStones[i]?.randomHardStone.includes(j - 1))
                      ? "hard-stone"
                      : ""
                  }`}
                  data-stone-id={`stone${j}`}
                  data-reduce-health="0.2"
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
    [hardStones],
  );
  //Main Char moves
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!e.key.startsWith("Arrow")) return;
      e.preventDefault(); // stop the page from scrolling
      setMoveDirection(e.key); //For main char rotation
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
      checkInsectCollision();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function checkInsectCollision() {
    if (!charRef.current) return;
    const charRect = charRef.current.getBoundingClientRect();
    const container = document.querySelector(".play-container");
    if (!container) return;

    // collected characters are excluded, so they cost nothing
    const selector = ALL_GAME_CHARACTERS.map(
      (c) => `.${c}:not([data-touched])`,
    ).join(",");

    // pass 1: reads only
    // const hits = [];
    document.querySelectorAll(selector).forEach((el) => {
      collisionCondition(charRect, el);
    });
  }

  const collisionCondition = (charRect, el, hitss) => {
    let touching;
    let level = Number(el?.dataset?.level);
    let hits = [];
    if (!level || isNaN(level)) {
      level = 1;
    }

    switch (level) {
      case 1:
        const l1charRec = el.getBoundingClientRect();

        touching = !(
          charRect.right < l1charRec.left ||
          charRect.left > l1charRec.right ||
          charRect.bottom < l1charRec.top ||
          charRect.top > l1charRec.bottom
        );
        if (touching) hits.push({ el, r: l1charRec });

        // pass 2: writes only
        hits.forEach(({ el, r }) => {
          el.dataset.touched = "true"; // can't trigger twice

          addRewardPopup(el, setRewards);
        });
        break;

      case 2:
        const l2charRec = el.getBoundingClientRect();

        touching = !(
          charRect.right < l2charRec.left ||
          charRect.left > l2charRec.right ||
          charRect.bottom < l2charRec.top ||
          charRect.top > l2charRec.bottom
        );
        if (touching) upgradeHealthStatus(el);

        break;

      default:
        return;
    }
  };

  //Change stone bg color when main char moves(like dig hole)
  useEffect(() => {
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
      [
        stoneEle1,
        stoneEle2,
        stoneEle3,
        stoneEle4,
        stoneEle5,
        stoneEle6,
      ].forEach((el) => {
        if (el) {
          el.style.background = "#5d3f0a";
          el.classList.add("stone_touched");
          next.push(el);
        }
      });
      // if (next[4]) next[4].style.borderRadius = "40px 0 0 0"; // top-left corner
      // if (next[5]) next[5].style.borderRadius = "0 40px 0 0"; // top-right corner
      // if (next[1]) next[1].style.borderRadius = "0 0 0 40px"; // bottom-left corner
      // if (next[2]) next[2].style.borderRadius = "0 0 40px 0"; // bottom-right corner
      touchedRef.current = next;
    };
    getCurrentPosition();
  }, [currentRow, currentStone]);

  // Hit hard stones. Main char stops if touches hard stone and reduce health
  useEffect(() => {
    const hit = containerRef.current.querySelector(".stone_touched.hard-stone");
    if (hit) {
      setMainCharPosition(lastSafeRef.current); // hard stone touched: go back
      upgradeHealthStatus(hit);
    } else {
      lastSafeRef.current = mainCharPosition; // safe: remember this spot
    }
  }, [mainCharPosition]);

  //Reduce health status when touches hard stones
  const jitter = (range) => (Math.random() - 0.5) * 2 * range;
  function upgradeHealthStatus(hitStone) {
    const main_char = document.querySelector(".char-body");
    const reduceVal = Number(hitStone?.dataset.reduceHealth);

    const healthSpan = document.createElement("span");
    healthSpan.textContent = reduceVal || 0;
    setHealth((pre) => pre - reduceVal);
    healthSpan.classList.add("reward-popup", "health-popup");

    healthSpan.style.left = `${jitter(22)}px`; // ±18px sideways
    healthSpan.style.top = `${jitter(18)}px`; // ±10px up/down
    healthSpan.style.setProperty("--drift", `${jitter(25)}px`); // sideways drift while floating
    main_char.appendChild(healthSpan);

    setTimeout(() => healthSpan.remove(), 2000); // match the animation length
  }

  const addRewardPopup = (el, setter) => {
    const main_char = document.querySelector(".char-body");

    const rewardValue = Number(el.id.split("-").pop()) || 0;
    if (!rewardValue) return;

    const popupSpan = document.createElement("span");
    popupSpan.textContent = `+${rewardValue}`;
    popupSpan.className = "reward-popup";
    // popupSpan.style.left = `${r.left - containerRect.left + jitter(20)}px`;
    // popupSpan.style.top = `${r.top - containerRect.top - jitter(30)}px`;
    // popupSpan.style.setProperty("--drift", `${(Math.random() - 0.5) * 50}px`);
    popupSpan.style.left = `${jitter(22)}px`; // ±18px sideways
    popupSpan.style.top = `${jitter(18)}px`; // ±10px up/down
    popupSpan.style.setProperty("--drift", `${jitter(25)}px`); // sideways drift while floating
    main_char.appendChild(popupSpan);

    // setRewards((pre) => pre + rewardValue);
    setter((pre) => pre + rewardValue);
    setTimeout(() => {
      popupSpan.remove();
      el.style.display = "none";
    }, 500);
  };

  const SCROLL_MARGIN = 200; // px from the bottom before it starts scrolling

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
    const highestReward = Number(localStorage.getItem(HIGHEST_REWARD));

    const currScore = (
      ((mainCharPosition.top / STEP_TB) * INITIAL_METRE) /
      15
    ).toFixed(4);

    if (currScore > highestScore) {
      localStorage.setItem(HIGHEST_SCORE, currScore);
      setHighestScore(currScore);
    }
    if (rewards > highestReward) {
      localStorage.setItem(HIGHEST_REWARD, rewards);
    }

    setScore(currScore > 0 ? currScore : 0.0);
  }, [mainCharPosition.top, rewards]);

  return (
    <div className="game-screen">
      <div className="score-container">
        <ScoreComp
          score={score}
          HighestScore={HighestScore}
          health={health}
          rewards={rewards}
        />
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
            {/* <CharBody moveDirection={moveDirection} />/ */}
          </div>
        </div>

        <WaterWave />

        {/** Insects/Worms   */}
        <WormsContainer randomData={randomData} />
        {rows}
      </div>
    </div>
  );
};

export default GameScreen;
