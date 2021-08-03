import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import IconButton from './IconButton'
import PlayIcon from '../static/icons/play.svg'
import PauseIcon from '../static/icons/pause.svg'
import BackIcon from '../static/icons/skip-back.svg'
import OverlaySlider from './overlaySlider'
import VolumeSlider from './VolumeSlider'
import Timecode from './Timecode'
import SectionInput from './SectionInput'


const VideoPlayer = (props) => {
    const [Playing,setPlaying] = useState(false);
    const [Time,setTime] = useState();
    const [VideoDuration, setVideoDuration] = useState();
    const [OnProgress, setOnProgress] = useState('playedSeconds');
    const [Seeking,setSeeking] = useState(false)
    const [Shit,setShit] = useState(0)
    const [Volume, setVolume] = useState(0.8)
    const [AudioMuted, setAudioMuted] = useState(false)
    const [CurrentTimecode, setCurrentTimecode] = useState('00:00:00')
    
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

    function ToEnd(){
      player.current.seekTo(VideoDuration,'seconds')
      setTime(VideoDuration)
      setOnProgress('playedSeconds')
    }

    function seekChange(e,VideoSeek) {
      if(Seeking == true){
        player.current.seekTo(VideoSeek,'seconds')
        setTime(VideoSeek)
      }
    
    }

    function HandleVolumeChanges(e,volChange){
      setVolume(volChange)

    }

    function HandleAudioMuteChanges(){
        setAudioMuted(!AudioMuted)

    }

    function format (seconds) {
      const date = new Date(seconds * 1000)
      const hh = date.getUTCHours()
      const mm = date.getUTCMinutes()
      const ss = pad(date.getUTCSeconds())
      if (hh) {
        return `${hh}:${pad(mm)}:${ss}`
      }
      return `${mm}:${ss}`
    }
    
    function pad (string) {
      return ('0' + string).slice(-2)
    }

    function SetTimecodes(seconds){
      setVideoDuration()
    }

    return (
        <div>
          <div  className="video-player-container">
          <ReactPlayer 
              url={props.videoFile} 
              width='100%'
              height='100%'
              playing={Playing} 
              ref={player} 
              onDuration={setVideoDuration} 
              onProgress={setOnProgress}
              progressInterval='1000/30'
              volume={Volume}
              muted={AudioMuted}/>
            <OverlaySlider  
              value={OnProgress['playedSeconds']}
              max={VideoDuration}
              MouseDown={() =>setSeeking(true)}
              seekChange={(e)=> seekChange(this,e.target.value)}
              onMouseUp={()=> setSeeking(false)}
              position = {OnProgress['playedSeconds']}/>
            <div className="controls-container">
              <Timecode duration={VideoDuration} progress={OnProgress['playedSeconds']}/>
              <div>
                <IconButton onClick={() => restart()} icon={BackIcon}>Back</IconButton>
                <IconButton onClick={() => setPlaying(false)} icon={PauseIcon}>Pause</IconButton>
                <IconButton onClick={() => setPlaying(true)} icon={PlayIcon}>Play</IconButton>
                <IconButton onClick={() => ToEnd()} icon={BackIcon} style = {{transform:'rotate(180deg)'}}>forward</IconButton>
              </div>
              <VolumeSlider 
                value={Volume}
                mute={AudioMuted}
                MouseDown={() =>setSeeking(true)}
                volumeChange = {(e)=> HandleVolumeChanges(this,e.target.value)}
                onMouseUp={()=> setSeeking(false)}
                HandleAudioMuteChanges={(e)=> HandleAudioMuteChanges()}/>
            </div>
            <SectionInput onClick={props.onClick}/>
          </div>
        </div>
    );
  };
  
  export default VideoPlayer;

