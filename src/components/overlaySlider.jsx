import React from 'react'
import VideoMarker from './VideoMarker'



const OverlaySlider = (props) => {


    return (
        <div className="slider-container">
            <input type="range" 
            className="slider-main"
            min='0' 
            max={props.max} 
            value={props.value}
            onMouseDown={props.MouseDown} 
            onMouseUp={props.onMouseUp} 
            onChange={props.seekChange}/>
            <VideoMarker position= {props.position}/>
        </div>
        
    );
  };
  
  export default OverlaySlider;