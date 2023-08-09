import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CityPage from './pages/CityPage';
import LandmarkPage from './pages/LandmarkPage';
import OtherLandmarksPage from './pages/OtherLandmarksPage';
import PhotosPage from './pages/PhotosPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/landmark">Найвідоміша пам'ятка</Link>
          </li>
          <li>
            <Link to="/other-landmarks">Інші пам'ятки</Link>
          </li>
          <li>
            <Link to="/photos">Фотографії</Link>
          </li>
        </ul>
      </nav>

      
        <Route exact path="/" component={CityPage} />
        <Route path="/landmark/:id" component={LandmarkPage} />
        <Route path="/other-landmarks" component={OtherLandmarksPage} />
        <Route path="/photos" component={PhotosPage} />
     
    </BrowserRouter>
  );
};

export default AppRouter;