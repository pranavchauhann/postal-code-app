// App.js
import React, { useState } from 'react';
import './App.css';
import EnterPostalCode from './EnterPostalCode';
import LocationInfo from './LocationInfo';

function App() {
  const [locationData, setLocationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (postalCode) => {
    // Construct the API URL
    const apiUrl = `https://api.zippopotam.us/in/${postalCode}`;

    setIsLoading(true);

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setLocationData({ error: error.message });
        setIsLoading(false);
      });
  };

  const clearInfo = () => {
    setLocationData(null);
  };

  return (
    <div className="App">
      <h1>Postal Code Location Info</h1>
      <EnterPostalCode onSearch={fetchData} />
      {isLoading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <LocationInfo data={locationData} clearInfo={clearInfo} />
      )}
    </div>
  );
}

export default App;
