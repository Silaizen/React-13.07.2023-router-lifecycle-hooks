import React from 'react';
import { useParams } from 'react-router-dom';

const LandmarkPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Найвідоміша пам'ятка</h1>
      <p>ID пам'ятки: {id}</p>
    </div>
  );
};

export default LandmarkPage;