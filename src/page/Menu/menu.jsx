import React, { useState, useEffect } from "react";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import DrinkGrid from "../../components/DrinkGird/DrinkGrid";
import cafedata from "../../../public/datacoffe.json";
import "./menu.css";

const Menu = () => {
  const [filteredDrinks, setFilteredDrinks] = useState(cafedata);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterChange = (filter) => {
    if (filter) {
      const filtered = cafedata.filter((drink) => drink.type === filter);
      setFilteredDrinks(filtered);
      setCurrentPage(1);
    } else {
      setFilteredDrinks(cafedata);
      setCurrentPage(1);
    }
  };

  const handleSelectDrink = (drink) => {
    alert(`Đã chọn: ${drink.name}`);
  };

  const handleViewDetails = (drink) => {
    alert(
      `Chi tiết về: ${drink.name}\nGiá: ${drink.price}\nMô tả: ${drink.description}`
    );
  };

  // Xử lý gợi ý tìm kiếm
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filteredSuggestions = cafedata.filter((drink) =>
        drink.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Giới hạn gợi ý
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  // Hàm tìm kiếm khi nhấn vào icon
  const handleSearch = () => {
    const filteredDrinks = cafedata.filter((drink) =>
      drink.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDrinks(filteredDrinks);
    setSuggestions([]); // Ẩn gợi ý sau khi tìm kiếm
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setFilteredDrinks([suggestion]);
    setSuggestions([]);
  };

  // Phân trang
  const totalPages = Math.ceil(filteredDrinks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrinks = filteredDrinks.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="app-container">
      <div className="container-search">
  <input
    type="text"
    placeholder="Tìm kiếm đồ uống..."
    value={searchTerm}
    onChange={handleSearchChange}
  />
  <i className="fa fa-search search-icon" onClick={handleSearch}></i>
  {suggestions.length > 0 && (
    <div className="search-suggestions">
      {suggestions.map(suggestion => (
        <div
          key={suggestion.id}
          className="search-suggestion-item"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion.name}
        </div>
      ))}
    </div>
  )}
</div>
      <div className="content">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <DrinkGrid
          drinks={currentDrinks}
          onSelect={handleSelectDrink}
          onViewDetails={handleViewDetails}
        />
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Menu;
