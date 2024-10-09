import React, { useState } from 'react';
import './FilterSidebar.css'

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter); 
  };

  return (
    <aside className="filter-sidebar">
      <h3>Mời bạn chọn món</h3>
      <ul>
        <li onClick={() => handleFilterChange('Coffe')}>Coffee</li>
        <li onClick={() => handleFilterChange('Tea')}>Tea</li>
        <li onClick={() => handleFilterChange('Juice')}>Juice</li>
        <li onClick={() => handleFilterChange('Food')}>Food</li>
        <li onClick={() => handleFilterChange('Bottled water')}>Bottled water</li>
        <li onClick={() => handleFilterChange('')}>Tất cả</li>
      </ul>
    </aside>
  );
};

export default FilterSidebar
