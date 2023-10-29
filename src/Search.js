import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import './styles.css'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setShowForm(true);
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='search-container'>
        <input
          className='search-bar'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" className='search-button'>Search</button>
      </form>
      {showForm && <MultiStepForm searchTerm={searchTerm} />}
    </div>
  );
}

export default Search;
