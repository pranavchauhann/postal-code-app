// EnterPostalCode.js
import React, { useState } from 'react';

const EnterPostalCode = ({ onSearch }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSearch = () => {
    onSearch(postalCode);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default EnterPostalCode;
