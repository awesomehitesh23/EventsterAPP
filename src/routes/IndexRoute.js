import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import Events from '../components/events/Events';
import Wishlist from '../components/wishlist/Wishlist';

import Registration from "../pages/register/Register";
import About from '../components/About/about';

const IndexRoute = () => {
  return (
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/event" element={<Events />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
  
      </Routes>
  );
}
 
export default IndexRoute;