import { ReactImageTurntable } from 'react-image-turntable';



function TurnableImage(props) {
    return (
      <ReactImageTurntable
        images={props?.images}
        autoRotate={{ disabled: true }}
     />
    );
}

export default TurnableImage;
