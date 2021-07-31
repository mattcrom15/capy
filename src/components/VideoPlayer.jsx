import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import Timeline from './Timeline'
import Button from './Button'


const VideoPlayer = (props) => {
    const [Playing,setPlaying] = useState(false);
    const [Time,setTime] = useState();
    const [VideoDuration, setVideoDuration] = useState();
    const [OnProgress, setOnProgress] = useState('playedSeconds');
    const [seeking,setSeeking] = useState(false)
    
    const player = React.createRef();

    function CurrentTime(){
      const time = player.current.getCurrentTime()
      setTime(time)
      return time
    } 

    function SeekTime(){
      const seek = player.current.seekTo(Time,'seconds')
      setOnProgress(seek)
    }

    function restart(){
      player.current.seekTo(0,'seconds')
      setTime(0)
      setOnProgress('playedSeconds')
    }

    return (
        <div>
            <ReactPlayer url={props.videoFile} playing={Playing} ref={player} onDuration={setVideoDuration} onProgress={setOnProgress}/>
            <Timeline value={OnProgress['playedSeconds']}
                    max={VideoDuration} 
                    MouseDown={() =>setSeeking(true)}
                    onMouseUp={()=> setSeeking(false)}/>
            <Button onClick={() => setPlaying(true)}>Play</Button>
            <Button onClick={() => setPlaying(false)}>Pause</Button>
            <Button onClick={() => CurrentTime()}>set time</Button>
            <Button onClick={() => restart()}>Back</Button>
            <h1>{Time}</h1>
            <h1>{VideoDuration}</h1>
            <p>{String(seeking)}</p>
        </div>
    );
  };
  
  export default VideoPlayer;

