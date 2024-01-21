import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

function SaveButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-white bg-emerald-600 border-solid border-2 border-emerald-600 hover:border-emerald-700 hover:bg-emerald-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      <CheckIcon className="text-white h-5 aspect-square" />
      <span className="pt-1 ml-3">Save</span>
    </button>
  );
}

export default SaveButton;
