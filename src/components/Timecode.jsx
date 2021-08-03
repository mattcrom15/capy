import React,{useState}  from 'react'



const Timecode = (props) => {
    const [CurrentTimecode,SetCurrentTimecode] = useState(props.progress)
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
        return '00:00:00.00'
      } else{
        
        return new Date(seconds * 1000).toISOString().substr(11, 11)  
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
