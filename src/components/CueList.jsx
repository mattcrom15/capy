import React from 'react'
import CueItem from './CueItem';


const CueList = (props) => {
    return (
        <div className="cuelist-container">
            <ul>
                {props.children}
            </ul>
        </div>
        
    );
  };
  
  export default CueList;