import { insectClass } from "../../../constant/constant";

const GameCharacter = ({
  img,
  cls = "",
  level = "1",
  top,
  left,
  width,
  height = "auto",
  moveSpeed = "40s",
  delayAnim = "0s",
  animStarts = "10%",
  animEnds = "100%",
  face,
  face_y,
  brightness,
  insectId,
  reward = "250",
  reduceHealth = "10",
}) => {
  return (
    <div
      className={cls}
      id={insectId}
      data-reward={reward}
      data-reduce-health={reduceHealth}
      data-level={level}
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
        "--face_y": face_y,
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
