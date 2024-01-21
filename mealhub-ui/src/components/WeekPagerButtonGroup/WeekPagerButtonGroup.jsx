import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

function WeekPagerButtonGroup() {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-orange-500"
      >
        <ChevronLeftIcon className="w-5 h-5 mx-1" />
      </button>

      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-orange-500"
      >
        <ChevronRightIcon className="w-5 h-5 mx-1" />
      </button>
    </div>
  );
}

export default WeekPagerButtonGroup;
