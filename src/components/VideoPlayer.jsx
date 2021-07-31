import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import Timeline from './Timeline'
import Button from './Button'


const VideoPlayer = (props) => {
    const [Playing,setPlaying] = useState(false);
    const [CT,setCT] = useState();
    const [VideoDuration, setVideoDuration] = useState();
    const [OnProgress, setOnProgress] = useState();
    
    const player = React.createRef();

    function CurrentTime(){
      const time = player.current.getCurrentTime()
      setCT(time)
      return time
    } 

    return (
        <div>
            <ReactPlayer url={props.videoFile} playing={Playing} ref={player} onDuration={setVideoDuration} onProgress={setOnProgress}/>
            <Timeline value={OnProgress['playedSeconds']} max={VideoDuration}/>
            <Button onClick={() => setPlaying(true)}>Play</Button>
            <Button onClick={() => setPlaying(false)}>Pause</Button>
            <Button onClick={() => CurrentTime()}>set time</Button>
            <h1>{CT}</h1>
            <h1>{VideoDuration}</h1>
            <p>{}</p>
        </div>
    );
  };
  
  export default VideoPlayer;

