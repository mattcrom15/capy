import React from 'react'

const VolumeSlider = (props) => {
    return (
        <div>
            <input type="checkbox" name="muted" id="" checked={props.mute} onChange={props.HandleAudioMuteChanges}/>
            <input 
                type="range" 
                name="VolumeSlider" 
                min="0" 
                max="1" 
                step='any'
                value={props.value}
                onMouseDown={props.MouseDown} 
                onMouseUp={props.onMouseUp}  
                onChange={props.volumeChange}/>
        </div>
    );
  };
  
  export default VolumeSlider;