import React from "react";
import { allImages } from "../../utils/images";

const Surface = () => {
  return (
    <div className="surface-wrapper">
      <div className="grass">
        <img src={allImages.surfaceStartIcon} alt="start" />
        <img src={allImages.surfaceMiddleIcon} alt="middle" />
        <img src={allImages.surfaceMiddleIcon} alt="middle" />

        <img src={allImages.surfaceLine2Icon} alt="line2" />
        <img src={allImages.surfaceLine2Icon} alt="line2" />

        <img src={allImages.surfaceLine3Icon} alt="line3" />
        <img src={allImages.surfaceLine2Icon} alt="line2" />
        <img src={allImages.surfaceLine3Icon} alt="line3" />
        <img src={allImages.surfaceLine2Icon} alt="line2" />
        <img src={allImages.surfaceLineIcon} alt="line" />
        <img src={allImages.surfaceLine2Icon} alt="line2" />
        <img src={allImages.surfaceLineIcon} alt="line" />
        <img src={allImages.surfaceLine2Icon} alt="line2" />
        <img src={allImages.surfaceMiddleIcon} alt="middle" />
        <img src={allImages.surfaceLineIcon} alt="line" />
        <img src={allImages.surfaceEndIcon} alt="end" />
      </div>
    </div>
  );
};

export default Surface;
