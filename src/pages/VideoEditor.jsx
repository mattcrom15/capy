import React,{useEffect, useState} from 'react'
import VideoPlayer from '../components/VideoPlayer'
import VideoClip from '../client/videos/Ed Sheeran - blow - live.mp4' 
import '../static/css/styles.css'
import CueList from '../components/CueList'
import CueItem from '../components/CueItem'

//add custom url
const video = VideoClip

function VideoEditor() {
const [CueItems,setCueItems] = useState([]);

function AddCue(){
  console.log('cue added')
  var index = CueItems.length
  const cueName = index + "name"
  const cueItem = <CueItem cueName={cueName}/>
  setCueItems(CueItems => CueItems.concat(cueItem))
}
  return (
    <div>
        <div style={{display:'flex'}}>
        <VideoPlayer videoFile={video} onClick={()=> AddCue()} />
        <CueList>
           {CueItems}
        </CueList>
        </div>
    </div>

  );
}

export default VideoEditor;
