import { insectClass } from "../../../constant/constant";

const GameCharacter = ({
  img,
  top,
  left,
  width,
  height = "auto",
  moveSpeed = "40s",
  delayAnim = "0s",
  animStarts = "10%",
  animEnds = "100%",
  face,
  brightness,
}) => {
  return (
    <div
      className={insectClass.mouse}
      style={{
        top,
        left,
        width,
        height,
        "--move-speed": moveSpeed,
        "--delay-anim": delayAnim,
        "--anim-starts": animStarts,
        "--anim-ends": animEnds,
        "--face": face,
      }}
    >
      <img
        src={img}
        alt="mouseWalkIcon"
        style={{ "--brightness": brightness }}
      />
    </div>
  );
};

export default GameCharacter;
