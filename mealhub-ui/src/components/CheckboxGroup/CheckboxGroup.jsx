import React from "react";

function CheckboxGroup() {
  return (
    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
      <li className="w-full border-b border-gray-200 rounded-t-lg">
        <div className="flex items-center ps-3">
          <input
            id="task1-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="task1-checkbox"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
          >
            Task 1
          </label>
        </div>
      </li>
      <li className="w-full border-b border-gray-200 rounded-t-lg">
        <div className="flex items-center ps-3">
          <input
            id="task2-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="task2-checkbox"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
          >
            Task 2
          </label>
        </div>
      </li>
      <li className="w-full border-b border-gray-200 rounded-t-lg">
        <div className="flex items-center ps-3">
          <input
            id="task3-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="task3-checkbox"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
          >
            Task 3
          </label>
        </div>
      </li>
    </ul>
  );
}

export default CheckboxGroup;
