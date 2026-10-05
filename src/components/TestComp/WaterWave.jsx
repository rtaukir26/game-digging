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
      <div className="layer-top"></div>
      <div className="layer-2"></div>
      <div className="layer-3"></div>
      <div className="layer-4"></div>
    </div>
  );
};

export default WaterWave;
