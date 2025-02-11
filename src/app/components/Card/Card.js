// components/Card/Card.js
import React from "react";

const Card = ({ flag, countries, onClick }) => {
  return (
    <div
      className="relative border p-6 rounded-xl shadow-md cursor-pointer transition-transform transform hover:scale-105 bg-white hover:bg-gradient-to-b hover:from-yellow-50 hover:to-green-50 text-gray-900 w-48 h-32 flex flex-col justify-center items-center"
      onClick={onClick} // Attach the onClick handler
    >
      <div className="w-12 h-12 flex items-center justify-center">
        {flag}
      </div>
      <div>
        <h3 className="text-small py-2 font-bold tracking-wide text-center">{countries}</h3>
      </div>
    </div>
  );
};

export default Card;