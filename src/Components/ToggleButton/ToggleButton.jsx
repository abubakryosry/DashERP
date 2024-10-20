import React from "react";

const ToggleButton = ({ isActive, onToggle }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isActive ? "bg-green-500" : "bg-gray-500"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
            isActive ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
