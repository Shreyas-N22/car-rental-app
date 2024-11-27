import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.make} {car.model}</h3>
      <p>{car.pricePerDay} / day</p>
      <button>Book Now</button>
    </div>
  );
};

export default CarCard;