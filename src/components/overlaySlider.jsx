import React from 'react'
import VideoMarker from './VideoMarker'



const OverlaySlider = (props) => {


    return (
        <div className="stupid-slider">
            <input type="range" 
            style={{width: '100%'}}
            min='0' 
            max={props.max} 
            value={props.value}
            onMouseDown={props.MouseDown} 
            onMouseUp={props.onMouseUp} 
            onChange={props.seekChange} 
            onMouseMove={props.mm}/>
            <VideoMarker/>
        </div>
        
    );
  };
  
  export default OverlaySlider;