import React, { useState } from "react";
import "./charHeathStatus.scss";
import { allImages } from "../../utils/images";
const CharHeathStatus = () => {
  const [showHealth, setShowHealth] = useState(false);
  const handleShowHealthDetails = () => {
    setShowHealth(!showHealth);
  };
  return (
    <div className={`char-heath-status `}>
      {!showHealth ? (
        <div className={`info-box `} onClick={handleShowHealthDetails}>
          <img src={allImages.infoIcon} alt="info" />
        </div>
      ) : (
        <div className={`heath-details `}>
          <div className="close" onClick={handleShowHealthDetails}>
            <img src={allImages.arrowDownIcon} alt="close" />
          </div>

          <div className="char-img">
            {/* <img src={allImages.mainAntIcon} alt="char" /> */}
          </div>

          <div className="health-content">
            <div className="content-item">
              <span className="column">Health Status</span>
              {/* <div className="img-wpr">
                <img src={allImages.heartIcon} alt="heart" />
              </div> */}
              <span>90%</span>
            </div>
            <div className="content-item">
              <span className="column">Health Level</span>

              <span>Very Good</span>
            </div>
            <div className="content-item">
              <span className="column">Deep</span>
              <span>120m</span>
            </div>
            <div className="content-item">
              <span className="column">Earth Layer</span>
              <span>Crust</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharHeathStatus;
