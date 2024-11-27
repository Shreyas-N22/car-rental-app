import React, { useState } from 'react';
import CarList from '../components/CarList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <CarList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;