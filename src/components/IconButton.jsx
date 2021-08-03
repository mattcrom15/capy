import React from 'react'



const IconButton = (props) => {
    return (
        <img src={props.icon} className="icon-button" onClick={props.onClick} style={props.style} />
        
    );
  };
  
  export default IconButton;