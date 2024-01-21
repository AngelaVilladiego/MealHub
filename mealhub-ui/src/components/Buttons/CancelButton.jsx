import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function CancelButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-white border-solid border-2 border-red-600 hover:border-red-700  bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      <XMarkIcon className="text-white h-5 aspect-square" />
      <span className="pt-1 ml-3">Cancel</span>
    </button>
  );
}

export default CancelButton;
