import React from 'react'



const Timeline = (props) => {
    return (
        <div>
            <div className = "ts-slider">
                <div className = "slider-border">
                    <div className = "slider-1"  style = {{width: props.value}} ></div>
                    <div className="slider-dolly"></div>
                </div>
            </div>

        </div>
    );
  };
  
  export default Timeline;



