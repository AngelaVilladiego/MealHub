import React from "react";

function CheckboxGroup() {
  return (
    <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
      <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
          <input
            id="task1-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            for="task1-checkbox"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
          >
            Task 1
          </label>
        </div>
      </li>
      <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
          <input
            id="task2-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            for="task2-checkbox"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
          >
            Task 2
          </label>
        </div>
      </li>
      <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
          <input
            id="task3-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            for="task3-checkbox"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
          >
            Task 3
          </label>
        </div>
      </li>
    </ul>
  );
}

export default CheckboxGroup;
