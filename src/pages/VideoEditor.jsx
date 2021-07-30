import React,{useEffect, useState} from 'react'
import VideoPlayer from '../components/VideoPlayer'
// import './static/css/styles.css';
import VideoClip from '../client/videos/amazon_walk_around.mp4' 
import 'bootstrap/dist/css/bootstrap.min.css'
import CueList from '../components/CueList'
import CueItem from '../components/CueItem'
import Button from '../components/Button'


function VideoEditor() {
    const [CueItems,setCueItems] = useState(['test','test02']);

  return (
    <div>
        <VideoPlayer videoFile= {VideoClip}/>
        <h1>Hello world</h1>
        <Button >Add Cue</Button>
        <CueList>
           {CueItems}
        </CueList>
    </div>

  );
}

export default VideoEditor;
