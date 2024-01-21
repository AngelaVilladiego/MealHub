import React from "react";

function CardCheckbox({ labelText, isSelected, onToggleOption }) {
  return (
    <label
      className={` text-gray-600 p-8 border-2 bg-gray-50
      border-gray-300 rounded-lg 
     cursor-pointer transition-all ease-in-out 
     hover:shadow-md hover:-translate-x-1 hover:-translate-y-1
     hover:bg-white hover:text-gray-800
     aspect-square w-48 flex flex-col items-center justify-center
     
        ${
          isSelected
            ? "border-emerald-500 bg-emerald-100 hover:bg-emerald-100 hover:border-emerald-500"
            : ""
        }`}
    >
      <span className="text-lg font-bold">{labelText}</span>
      <input
        type="checkbox"
        className="hidden"
        checked={isSelected}
        onChange={onToggleOption}
      />
    </label>
  );
}

export default CardCheckbox;
