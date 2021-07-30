import VideoPlayer from './components/VideoPlayer'
// import './static/css/styles.css';
import VideoClip from './client/videos/amazon_walk_around.mp4' 
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
        <VideoPlayer videoFile= {VideoClip}/>
        <h1>Hello world</h1>
    </div>

  );
}

export default App;
