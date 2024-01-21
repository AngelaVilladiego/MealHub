import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function NextButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
      group text-gray-600 border-solid 
      border-2 border-gray-300 
      hover:border-white hover:bg-orange-500 hover:text-white 
      font-medium rounded-lg text-sm px-5 py-2.5 
      text-center inline-flex items-center`}
    >
      <span className="pt-1 mr-3 group-hover:cursor-default">Next</span>
      <ChevronRightIcon className="text-gray-600 group-hover:text-white h-5 aspect-square" />
    </button>
  );
}

export default NextButton;
