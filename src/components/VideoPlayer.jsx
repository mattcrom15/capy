import ReactPlayer from 'react-player'



const VideoPlayer = (props) => {
    return (
        <ReactPlayer url={props.videoFile} controls = {true}/>
    );
  };
  
  export default VideoPlayer;

