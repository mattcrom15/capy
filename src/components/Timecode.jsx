import React  from 'react'



const Timecode = (props) => {


    return (
    <time datetime="00:00:00">{props.seconds}</time>
    );
  };
  
  export default Timecode;
