import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import Timeline from './Timeline'
import Button from './Button'


const VideoPlayer = (props) => {
    const [Playing,setPlaying] = useState(false);
    const [Time,setTime] = useState();
    const [VideoDuration, setVideoDuration] = useState();
    const [OnProgress, setOnProgress] = useState('playedSeconds');
    const [Seeking,setSeeking] = useState(false)
    const [Shit,setShit] = useState(0)
    const [MouseMove, setMouseMove] = useState({"x": 0, "y": 0})
    
    const player = React.createRef();

    function CurrentTime(){
      const time = player.current.getCurrentTime()
      setTime(time)
      return time
    } 

    function restart(){
      player.current.seekTo(0,'seconds')
      setTime(0)
      setOnProgress('playedSeconds')
    }

    function seekChange(e,j) {
      const MouseLocation =  j
      if(Seeking == true){
        console.log(j)
        player.current.seekTo(MouseLocation,'seconds')
        setTime(MouseLocation)
        
        
      }
    
    }

    return (
        <div>
            <ReactPlayer url={props.videoFile} 
            playing={Playing} 
            ref={player} 
            onDuration={setVideoDuration} onProgress={setOnProgress}/>
            <Timeline value={OnProgress['playedSeconds']}
            max={VideoDuration} 
            MouseDown={() =>setSeeking(true)}
            seekChange={()=> seekChange(this)}
            onMouseUp={()=> setSeeking(false)}
            mm={(e)=>seekChange(this,e.nativeEvent.offsetX)}/>
            <Button onClick={() => setPlaying(true)}>Play</Button>
            <Button onClick={() => setPlaying(false)}>Pause</Button>
            <Button onClick={() => CurrentTime()}>set time</Button>
            <Button onClick={() => restart()}>Back</Button>
            <h1>{Time}</h1>
            <h1>{VideoDuration}</h1>
            <p>{String(Seeking)}</p>
        </div>
    );
  };
  
  export default VideoPlayer;

