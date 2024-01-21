import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function RegenerateButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-gray-600 border-solid border-2 border-gray-300 hover:border-white hover:bg-orange-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      <ArrowPathIcon className="text-gray-600 group-hover:text-white h-5 aspect-square" />
      <span className="pt-1 ml-3">Regenerate</span>
    </button>
  );
}

export default RegenerateButton;
