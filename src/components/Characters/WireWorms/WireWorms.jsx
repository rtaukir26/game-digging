import { insectClass } from "../../../constant/constant";

const WireWorms = ({
  num,
  wormId,
  width,
  headWidth,
  height,
  headHeight,
  gap,
  top,
  left,
  bg,
  headBG = "#55101e",
  moveSpeed = "100s",
  delayAnim = "0s",
  animStarts,
  animEnds,
  translateY,
  step,
  borderRadius = "50%",
}) => {
  const widthOfWorm = () => {
    let totalWidthOfWorm = num * width + headWidth;
    for (let i = 0; i < gap; i++) {
      totalWidthOfWorm += i;
    }
    return totalWidthOfWorm || 0;
  };

  return (
    <div
      className={insectClass.wireworm}
      id={wormId}
      style={{
        top,
        left,
        "--move-speed": moveSpeed,
        "--delay-anim": delayAnim,
        "--anim-starts": animStarts,
        "--anim-ends": animEnds,
        "--bg": bg,
        "--n": num,

        width: widthOfWorm(),
      }}
    >
      <div className={`wireworm-body ${wormId}`}>
        {Array.from({ length: num }, (_, i) => {
          return (
            <span
              key={i}
              className={` worm-seg ${i === num - 1 ? "worm-head" : ""}`}
              style={{
                "--i": i,
                "--worm-head-bg": headBG,
                "--translate-y": translateY,
                "--step": step,
                width: `${i < num - 1 ? width : headWidth}px`,
                height: `${i < num - 1 ? height : headHeight}px`,
                "--borderRadius": borderRadius,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WireWorms;
