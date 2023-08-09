import React from 'react';
import { Link } from 'react-router-dom';

const OtherLandmarks = () => {
  return (
    <div>
      <h2>Інші пам'ятки міста</h2>
      <ul>
        <li>
          <Link to="/landmark/1">Пам'ятка 1</Link>
        </li>
        <li>
          <Link to="/landmark/2">Пам'ятка 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default OtherLandmarks;