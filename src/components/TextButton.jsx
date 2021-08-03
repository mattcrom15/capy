import React from 'react'



const TextButton = (props) => {
    return (
        <button className= "text-button" onClick={props.onClick} style={props.style}>{props.children}</button>
        
    );
  };
  
  export default TextButton;