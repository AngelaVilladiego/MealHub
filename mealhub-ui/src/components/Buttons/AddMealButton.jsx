import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function AddMealButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-gray-600 border-solid border-2 border-gray-300 hover:border-white hover:bg-emerald-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      <PlusIcon className="text-gray-600 group-hover:text-white h-5 aspect-square" />
      <span className="pt-1 ml-3">Add a Meal</span>
    </button>
  );
}

export default AddMealButton;
