import React from 'react'



const Timeline = (props) => {


    return (
        <div className="timeline-container">
            <div className = "timeline-slider" 
            onMouseDown={props.MouseDown} 
            onMouseUp={props.onMouseUp} 
            onChange={props.seekChange} 
            onMouseMove={props.mm}
            style ={{width:'500px'}}>
                <div className = "slider-border">
                    <div className = "slider-progress"  style = {{width: props.value}} ></div>
                    <div className="slider-playhead"></div>
                </div>
            </div>

        </div>
    );
  };
  
  export default Timeline;



