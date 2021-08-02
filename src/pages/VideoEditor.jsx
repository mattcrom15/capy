import React,{useEffect, useState} from 'react'
import VideoPlayer from '../components/VideoPlayer'
// import './static/css/styles.css';
import VideoClip from '../client/videos/Ed Sheeran - blow - live.mp4' 
import '../static/css/styles.css'
import CueList from '../components/CueList'
import CueItem from '../components/CueItem'
import Button from '../components/Button'


//add custom url
const video = VideoClip

function VideoEditor() {
    const [CueItems,setCueItems] = useState(['test','test02']);

  return (
    <div>
        
        <VideoPlayer videoFile= {video} />
        <h1>Hello world</h1>
        <Button >Add Cue</Button>
        <CueList>
           {CueItems}
        </CueList>
    </div>

  );
}

export default VideoEditor;
