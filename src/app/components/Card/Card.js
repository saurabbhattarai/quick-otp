// components/Card/Card.js
import React from "react";

const Card = ({ flag, countries, onClick }) => {
  return (
    <div
      className="relative border p-4 rounded-xl shadow-md cursor-pointer transition-transform transform hover:scale-105 bg-white hover:bg-gradient-to-b hover:from-yellow-50 hover:to-green-50 text-gray-900 w-48 h-32 flex flex-col justify-center items-center"
      onClick={onClick} // Attach the onClick handler
    >
      <div className="w-12 h-12 flex items-center justify-center">
        {flag}
      </div>
      <div>
        <h3 className="text-lg font-bold tracking-wide text-center text-gray-900">{countries}</h3>
      </div>
    </div>
  );
};

export default Card;
