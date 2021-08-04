import React  from 'react'
import TextButton from './TextButton'
import {InputState} from './atoms'
import {useRecoilState, useRecoilValue} from 'recoil'



const SectionInput = (props) => {
    const [InputValue, SetInputValue] = useRecoilState(InputState)

    return (
        <div>
            <textarea type="text-area" 
            name="text"  
            rows="4" 
            cols="50" 
            className="input-container"
            onChange={(e)=>SetInputValue(e.target.value)}/>
            <TextButton onClick={props.onClick} currentTime={props.currentTime}>Create Cue</TextButton>
        </div>
    );
  };
  
  export default SectionInput;
