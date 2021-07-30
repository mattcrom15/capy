import React from 'react'

const CueItem = (props) => {
    return (
        <li>
            <p>{props.cueNumber}</p>
            <p>{props.cueName}</p>
            <p>{props.startTime}</p>
            <p>{props.endTime}</p>
        </li>
    );
  };
  
  export default CueItem;