import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  // Fetch car details using the id (assuming data is available)
  return (
    <div className="car-details">
      <h2>Car Details</h2>
      {/* Render detailed information about the car */}
      <p>Details for car with id {id}</p>
    </div>
  );
};

export default CarDetails;