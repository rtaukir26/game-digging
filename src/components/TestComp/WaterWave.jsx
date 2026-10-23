import { allImages } from "../../utils/images";
import "./waterWave.scss";
const WaterWave = () => {
  return (
    <div className="wave-box">
      {/* <div className="wave-wpr">
        <svg
          className="wave w1"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C150,0 350,60 600,30 C850,0 1050,60 1200,30 L1200,60 L0,60 Z" />
        </svg>
        <svg
          className="wave w2"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C150,0 380,10 400,30 C810,40 1010,60 1200,30 L1200,60 L0,60 Z"
            // stroke="black"
            // fill="none"
          />
        </svg>
        <svg
          className="wave w3"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C60,50 30,70 40,30 C100,20 650,30 300,60 L1200,60 L0,60 Z"
            // stroke="black"
            // fill="none"
          />
        </svg>
      </div> */}
      {/* <div className="wave-wpr">
        <img src={allImages.underground2Icon} alt="underground2" />
      </div> */}

      <div className="layer-top">
        <img
          className="img-lp"
          src={allImages.treeUnderGroundIcon2}
          alt="treeUnderGroundIcon"
        />
      </div>
      <div className="layer-2">
        <img
          className="crack-img"
          src={allImages.crackLandIcon}
          alt="crackLandIcon"
        />
        <img className="pipe-img" src={allImages.pipeIcon} alt="pipe" />
        <img className="pipe-img pi2" src={allImages.pipeIcon} alt="pipe" />
        <img className="pipe2-img" src={allImages.pipe2pngIcon} alt="pipe" />
        <img
          className="pipe2-img pi2"
          src={allImages.pipe2pngIcon}
          alt="pipe"
        />
        <img className="tree" src={allImages.treeIcon} alt="tree" />
        <img className="tree2" src={allImages.tree2Icon} alt="tree" />
      </div>

      <div className="layer-3"></div>
      <div className="layer-4">
        <img className="hole" src={allImages.holeIcon} alt="hole" />
        <img className="hole2" src={allImages.hole3pngIcon} alt="hole" />
        <img className="hole3" src={allImages.hole3pngIcon} alt="hole" />
        <img className="hole4" src={allImages.hole3pngIcon} alt="hole" />
        <img className="hole7" src={allImages.hole3pngIcon} alt="hole" />
        <img className="hole5" src={allImages.hole4Icon} alt="hole" />
        <img className="hole6" src={allImages.hole4Icon} alt="hole" />
      </div>
    </div>
  );
};

export default WaterWave;
