import React,{useEffect, useState} from 'react'
import VideoPlayer from '../components/VideoPlayer'
import VideoClip from '../client/videos/Ed Sheeran - blow - live.mp4' 
import '../static/css/styles.css'
import CueList from '../components/CueList'
import CueItem from '../components/CueItem'
import {InputState} from '../components/atoms'
import {useRecoilValue} from 'recoil'
import SectionInput from '../components/SectionInput'


//add custom url
const video = VideoClip


function VideoEditor() {
const [CueItems,setCueItems] = useState([]);
const inVal = useRecoilValue(InputState)

function AddCue(){
  const ct = '00:00:00.00'
  console.log(ct)
  var index = CueItems.length
  const cueName = inVal
  const cueItem = <CueItem cueName={cueName} startTime={ct}/>
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
