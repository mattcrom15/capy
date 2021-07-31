import React from 'react'



const Button = (props) => {
    return (
        <img src={props.icon} className="icon-button" onClick={props.onClick}/>
        
    );
  };
  
  export default Button;