import React from 'react'

const Timeline = (props) => {
    return (
        <div>
            <input type="range" min='0' max={props.max} value={props.value} />
        </div>
    );
  };
  
  export default Timeline;



