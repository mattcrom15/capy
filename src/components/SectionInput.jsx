import React  from 'react'
import TextButton from './TextButton'
import filePlusIcon from '../static/icons/file-plus.svg'

 

const SectionInput = (props) => {
    function CreateCue(){
        console.log(props.currentTime)
    }
    return (
        <div>
        <textarea type="text-area" name="text"  rows="4" cols="50" className="input-container"/>
        <TextButton onClick={CreateCue} currentTime={props.currentTime}>Create Cue</TextButton>
        </div>
    );
  };
  
  export default SectionInput;
