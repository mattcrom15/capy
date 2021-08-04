import React,{useState}  from 'react'
import {CurrentTimecode} from './atoms'
import {useRecoilState} from 'recoil'



const Timecode = (props) => {
    const [currentTimecode, SetcurrentTimecode] = useRecoilState(CurrentTimecode)
    function ShowSeconds(seconds){
      if(!seconds){
        //pass
      } else{
        return new Date(seconds * 1000).toISOString().substr(11, 11)  
      } 
    } 

    function ShowCurrentSeconds(seconds){
      var time = '00:00:00.00'
      if(!seconds){
        SetcurrentTimecode(time)
        return time
      } else{
        time = new Date(seconds * 1000).toISOString().substr(11, 11)  
        SetcurrentTimecode(time)
        return time 
      } 
    } 

    return (
      <div className="timecode-container">
        <time datetime="00:00:00" progress={props.progress}>{ShowCurrentSeconds(props.progress)}</time>
        <p>/</p>
        <time datetime="00:00:00" duration={props.duration} style={{color: 'var(--paleblue)'}}>{ShowSeconds(props.duration)}</time>
      </div>
    );
  };
  
  export default Timecode;
