import React, { createContext, useState, useEffect } from 'react';

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    // Fetch cars from an API or local data
    setCars([
      { id: 1, make: 'Tesla', model: 'Model 3', pricePerDay: 120, image: 'tesla.jpg' },
      { id: 2, make: 'BMW', model: 'X5', pricePerDay: 150, image: 'bmw.jpg' },
      // Add more cars
    ]);
  }, []);

  return (
    <CarContext.Provider value={{ cars }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;