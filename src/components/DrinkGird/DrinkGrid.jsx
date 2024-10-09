import React from "react";
import "./DrinkGird.css";

const DrinkGrid = ({ drinks, onSelect, onViewDetails }) => {
  return (
    <div className="drink-grid">
      {drinks.map((drink, index) => (
        <div className="drink-card">
          <img src={drink.img} alt={drink.name} className="drink-image" />
          <div className="info-container">
            <h4>{drink.name}</h4>
            <span className="drink-price">{drink.price} VNĐ</span>
          </div>
          <div className="button-container">
            <button onClick={() => onSelect(drink)}>Chọn</button>
            <button onClick={() => onViewDetails(drink)}>Xem Chi Tiết</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrinkGrid;
