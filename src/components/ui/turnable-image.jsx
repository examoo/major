import React, { useState } from "react";
import { ReactImageTurntable } from "react-image-turntable";
const TurnableImage = ({ images }) => {
  const [index, setIndex] = useState(5);

  const handleSliderChange = (e) => {
    setIndex(Number(e.target.value));
  };

  return (
    <div className="flex-1 relative">
      <div className="flex items-center mb-2 absolute bottom-5 right-5 z-[2]">
        <img src="../../360-view.png" className="w-12"/>
      </div>
      <ReactImageTurntable
        images={images}
        initialImageIndex={index}
        autoRotate={{ disabled: true }}
      />
      <input
        type="range"
        min={0}
        max={images.length - 1}
        step={1}
        value={index}
        onChange={handleSliderChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none pointer-events-auto"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
}

export default TurnableImage;
