// LocationInfo.js
import React from 'react';

const LocationInfo = ({ data, clearInfo }) => {
  if (data === null) return null;

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  if (!data.country) {
    return <div className="loading-indicator">Loading...</div>;
  }

  return (
    <div>
      <button onClick={clearInfo} style={{ marginTop: '20px' }} >Clear</button>
      <h2>Location Information</h2>
      <p>Country: {data.country}</p>
      <p>Country Abbreviation: {data['country abbreviation']}</p>
      <h3>Places:</h3>
      <ul>
        {data.places.map((place, index) => (
          <li key={index}>
            <p>Place Name: {place['place name']}</p>
            <p>State: {place.state}</p>
            <p>State Abbreviation: {place['state abbreviation']}</p>
            <p>Longitude: {place.longitude}</p>
            <p>Latitude: {place.latitude}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInfo;
