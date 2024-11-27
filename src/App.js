import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Footer from './components/Footer';
import CarProvider from './contexts/CarContext';

const App = () => {
  return (
    <CarProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
        <Footer />
      </Router>
    </CarProvider>
  );
};

export default App;