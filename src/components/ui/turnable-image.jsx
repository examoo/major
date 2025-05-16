import { ReactImageTurntable } from "react-image-turntable";
const TurnableImage = ({ images }) => {

  return (
    <div className="flex-1 relative">
      <div className="flex items-center mb-2 absolute bottom-5 right-5 z-[2]">
        <img src="../../360-view.png" className="w-12" title="Drag ti view 360 " />
      </div>
      <ReactImageTurntable
        images={images}
        autoRotate={{ disabled: true }}
      />
    </div>
  );
}

export default TurnableImage;
