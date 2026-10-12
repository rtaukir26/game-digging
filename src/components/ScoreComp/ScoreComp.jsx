import { allImages } from "../../utils/images";
import "./scoreComp.scss";
const ScoreComp = ({ score, HighestScore, health, rewards }) => {
  return (
    <div className="score-body">
      <div className="sc-left">
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
            <span className="column">Highest Digged</span>
            <span className="sc-value">
              {Number(HighestScore) > 1
                ? Number(HighestScore).toFixed(2)
                : Number(HighestScore)}
              m
            </span>
          </div>
          <div className="score">
            <span className="column">Digging </span>
            <span className="score-value">
              {Number(score) > 1 ? Number(score).toFixed(2) : Number(score)}m
            </span>
          </div>
        </div>
      </div>
      <div className="sc-middle">
        <div className="sc-top">
          <div className="sc-item">
            <img className="reward" src={allImages.rewardIcon} alt="reward" />
            <span>{rewards} </span>
          </div>
          <div className="sc-item">
            <img src={allImages.goldIcon} alt="gold" />
            <span>23 </span>
          </div>
          <div className="sc-item">
            <img src={allImages.diamondIcon} alt="diamond" />
            <span>4 </span>
          </div>
          <div className="sc-item">
            <img className="ruby" src={allImages.rubyIcon} alt="ruby" />
            <span>7 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreComp;
