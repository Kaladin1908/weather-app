import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <title>Open Weather API Project</title>
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="styles.css" />
      </div>
    <div>
      <div className='weather-outer'>
        <div id="loader" className='loader-container'><div className='loader'></div></div>
        <div id="weather">
          <p id="city"></p>
          <p id="temp"></p>
          <img id="icon" src="" />
        </div>
        <button id='getLocationButton'>Get My Location</button>
      </div>
      <script src="index.js"></script>
    </div>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
