import React from 'react'



const VideoMarker = (props) => {


    return (
        <p className="marker" style={{left: props.position}}></p>
    
    );
  };
  
  export default VideoMarker;
