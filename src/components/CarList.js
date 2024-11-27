import React, { useContext } from 'react';
import CarCard from './CarCard';
import { CarContext } from '../contexts/CarContext';

const CarList = () => {
  const { cars } = useContext(CarContext);

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;