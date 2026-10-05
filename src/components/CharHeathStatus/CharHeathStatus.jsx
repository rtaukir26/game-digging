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
          <span onClick={handleShowHealthDetails}>hide</span>
        </div>
      )}
    </div>
  );
};

export default CharHeathStatus;
