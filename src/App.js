import React, { useState } from 'react';
import './App.css';
import EnterPostalCode from './EnterPostalCode';
import LocationInfo from './LocationInfo';

function App() {
  const [locationData, setLocationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (postalCode) => {
    // Check if a postal code is entered
    if (!postalCode) {
      setError("Enter a Postal Code !");
      return;
    }

    // Construct the API URL
    const apiUrl = `https://api.zippopotam.us/in/${postalCode}`;
    
    setIsLoading(true);
    setLocationData(null); // Clear previous data
    setError(null); // Clear previous error

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response is not HTML or an error page
        if (!response.ok || !response.headers.get('content-type').startsWith('application/json')) {
          throw new Error("Invalid response from the server.");
        }
        return response.json();
      })
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
    setError(null);
  };

  return (
    <div className="App">
      <h1>Postal Code Location Info</h1>
      <EnterPostalCode onSearch={fetchData} />
      {error ? (
        <div style={{ marginTop: '20px' }}>{error}</div>
      ) : isLoading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <LocationInfo data={locationData} clearInfo={clearInfo} />
      )}
    </div>
  );
}

export default App;
