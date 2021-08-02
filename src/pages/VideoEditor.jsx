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
const [CueItems,setCueItems] = useState([<CueItem cueName="test"/>,<CueItem cueName="test"/>]);

  return (
    <div>
        <div style={{display:'flex'}}>
        <VideoPlayer videoFile= {video} />
        <CueList>
           {CueItems}
        </CueList>
        </div>
    </div>

  );
}

export default VideoEditor;
