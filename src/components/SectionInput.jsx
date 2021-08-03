import React  from 'react'
import TextButton from './TextButton'


 

const SectionInput = (props) => {
    return (
        <div>
        <textarea type="text-area" name="text"  rows="4" cols="50" className="input-container"/>
        <TextButton onClick={props.onClick} currentTime={props.currentTime}>Create Cue</TextButton>
        </div>
    );
  };
  
  export default SectionInput;
