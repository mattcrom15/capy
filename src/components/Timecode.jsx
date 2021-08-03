import React,{useState}  from 'react'



const Timecode = (props) => {
    const [CurrentTimecode,SetCurrentTimecode] = useState('00:00:00')
    function ShowSeconds(seconds){
      console.log(seconds)
      if(!seconds){
        //pass
      } else{
        return new Date(seconds * 1000).toISOString().substr(11, 11)  
      } 
    } 

    function ShowCurrentSeconds(seconds){
      console.log(seconds)
      if(!seconds){
        //pass
      } else{
        SetCurrentTimecode(seconds)
        return new Date(seconds * 1000).toISOString().substr(11, 11)  
      } 
    } 

    return (
      <div style={{display: 'flex'}}>
        <time datetime="00:00:00" progress={props.progress}>{ShowSeconds(props.progress)}</time>
        <time datetime="00:00:00" duration={props.duration}>{ShowSeconds(props.duration)}</time>
      </div>
    );
  };
  
  export default Timecode;
