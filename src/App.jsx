import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AddLocationPage from './components/AddLocationPage';
import ShortestPathPage from './components/ShortestPathPage';
import EndJourneyPage from './components/EndJourneyPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/add-location" element={<AddLocationPage />} />
      <Route path="/shortest-path" element={<ShortestPathPage />} />
      <Route path="/end-journey" element={<EndJourneyPage />} />
    </Routes>
  </Router>
);

export default App;
