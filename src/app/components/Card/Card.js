// components/Card/Card.js
import React from "react";

const Card = ({ flag, countries, numbers, onClick }) => {
  return (
    <div
      className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
      onClick={onClick}  // Attach the onClick handler
    >
      <div className="flex items-center">
        <div className="mr-4">{flag}</div>
        <div>
          <h3 className="text-lg font-bold">{countries}</h3>
          <p className="text-gray-600">{numbers}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;