import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function BackButton({ onClick, isVisible }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${isVisible ? "" : "hidden"} 
      group text-gray-600 border-solid 
      border-2 border-gray-300 
      hover:border-white hover:bg-orange-500 hover:text-white 
      font-medium rounded-lg text-sm px-5 py-2.5 
      text-center inline-flex items-center`}
    >
      <ChevronLeftIcon className="text-gray-600 group-hover:text-white h-5 aspect-square" />
      <span className="group-hover:cursor-default pt-1 ml-3">Back</span>
    </button>
  );
}

export default BackButton;
