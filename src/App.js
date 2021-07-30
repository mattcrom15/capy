import logo from './logo.svg';
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'/>
      </header>
    </div>
  );
}

export default App;
