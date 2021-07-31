import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import Button from './Button'
import PlayIcon from '../static/icons/play.svg'
import PauseIcon from '../static/icons/pause.svg'
import BackIcon from '../static/icons/skip-back.svg'
import filePlusIcon from '../static/icons/file-plus.svg'
import OverlaySlider from './overlaySlider'


const VideoPlayer = (props) => {
    const [Playing,setPlaying] = useState(false);
    const [Time,setTime] = useState();
    const [VideoDuration, setVideoDuration] = useState();
    const [OnProgress, setOnProgress] = useState('playedSeconds');
    const [Seeking,setSeeking] = useState(false)
    const [Shit,setShit] = useState(0)
    
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
        player.current.seekTo(MouseLocation,'seconds')
        setTime(MouseLocation)
      }
    
    }

    return (
        <div className="video-player-container">
            <ReactPlayer url={props.videoFile} 
            width='100%'
            height='100%'
            playing={Playing} 
            ref={player} 
            onDuration={setVideoDuration} onProgress={setOnProgress}/>
            <OverlaySlider  
            value={OnProgress['playedSeconds']}
            max={VideoDuration}
            MouseDown={() =>setSeeking(true)}
            seekChange={()=> seekChange(this)}
            onMouseUp={()=> setSeeking(false)}/>
            {/* // mm={(e)=>seekChange(this,e.nativeEvent.offsetX)}/>  */}

            <Button onClick={() => restart()} icon={BackIcon}>Back</Button>
            <Button onClick={() => setPlaying(true)} icon={PlayIcon}>Play</Button>
            <Button onClick={() => setPlaying(false)} icon={PauseIcon}>Pause</Button>
            <Button onClick={() => CurrentTime()} icon={filePlusIcon}>set time</Button>
            <h1>{Time}</h1>
            <h1>{VideoDuration}</h1>
            <p>{String(Seeking)}</p>
        </div>
    );
  };
  
  export default VideoPlayer;

