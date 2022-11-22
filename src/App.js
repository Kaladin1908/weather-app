import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });
    
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
  // return (
  //   <div className='App'>
  //     <div>
  //       <title>Open Weather API Project</title>
  //       <meta charSet='UTF-8'/>
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="stylesheet" href="styles.css" />
  //     </div>
  //   <div>
  //     <div className='weather-outer'>
  //       <div id="loader" className='loader-container'><div className='loader'></div></div>
  //       <div id="weather">
  //         <p id="city"></p>
  //         <p id="temp"></p>
  //         <img id="icon" src="" />
  //       </div>
  //       <button id='getLocationButton'>Get My Location</button>
  //     </div>
  //     <script src="index.js"></script>
  //   </div>
  //   </div>
  // );
}

export default App;
