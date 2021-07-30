import React from 'react'
import Button from './Button'
import CueItem from './CueItem';


const CueList = (props) => {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
        
    );
  };
  
  export default CueList;