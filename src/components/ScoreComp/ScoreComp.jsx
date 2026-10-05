import { allImages } from "../../utils/images";
import "./scoreComp.scss";
const ScoreComp = ({ score, HighestScore, health }) => {
  return (
    <div className="score-body">
      <div className="health-box">
        <div className="outer-progress">
          <div className="inner-progress" style={{ width: health + "%" }}>
            <div className="heart-text-box">
              <img src={allImages.heartBlkIcon} alt="heart" />
              <span>{health.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="score-box">
        <div className="max-score">
          <span>Max-Digged: </span>
          <span className="sc-value"> {HighestScore}m</span>
        </div>
        <div className="score">
          <span>Digging: </span>
          <span className="score-value"> {score}m</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreComp;
