import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Button from './Button'


const VideoPlayer = (props) => {
    const [Playing,setPlaying] = useState(false);
    return (
        <div>
            <ReactPlayer url={props.videoFile} playing={Playing}/>
            <Button onClick={() => setPlaying(true)}>Play</Button>
            <Button onClick={() => setPlaying(false)}>Pause</Button>
            <Button>New Cue</Button>
        </div>
    );
  };
  
  export default VideoPlayer;

