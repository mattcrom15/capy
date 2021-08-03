import React  from 'react'
import Button from './Button'
import filePlusIcon from '../static/icons/file-plus.svg'



const sectionInput = (props) => {
    function CreateCue(){
        console.log(props.currentTime)
    }
    return (
      <div>
        <input type="text"/>
        <Button onClick={CreateCue} currentTime={props.currentTime} icon={filePlusIcon}>CreateCue</Button>
      </div>
    );
  };
  
  export default sectionInput;
