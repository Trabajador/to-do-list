import React from "react";

type FilterOption = "all" | "active" | "completed";

interface FiltersProps {
  currentFilter: FilterOption;
  setFilter: (filter: FilterOption) => void;
  activeTodosCount: number;
  completedTodosCount: number;
  clearCompleted: () => void;
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
}

const Filters: React.FC<FiltersProps> = ({
  currentFilter,
  setFilter,
  activeTodosCount,
  completedTodosCount,
  clearCompleted, // Access completedTodosCount
  // showCompleted,
  // setShowCompleted,
}) => {
  return (
    <div className="filter-section flex flex-col justify-between items-center p-4 text-xs bg-white rounded-br-lg rounded-bl-lg lg:flex-row">
      <div className="flex justify-between w-full">
        <div className="">
          <span className="mr-2">{activeTodosCount} items left</span>
        </div>
        <div className="flex flex-wrap gap-3 lg:flex-nowrap">
          <span
            onClick={() => setFilter("all")}
            className={`cursor-pointer ${currentFilter === "all" ? "text-blue-500" : ""} ${currentFilter !== "all" ? "hover:text-blue-500" : ""}`}
          >
            All
          </span>
          <span
            onClick={() => setFilter("active")}
            className={`cursor-pointer ${currentFilter === "active" ? "text-blue-500" : ""} ${currentFilter !== "active" ? "hover:text-blue-500" : ""}`}
          >
            Active
          </span>
          <span
            onClick={() => setFilter("completed")}
            className={`cursor-pointer ${currentFilter === "completed" ? "text-blue-500" : ""} ${currentFilter !== "completed" ? "hover:text-blue-500" : ""}`}
          >
            Completed
          </span>
        </div>
      </div>

      <div className="flex items-center mt-4 lg:mt-0 lg:flex-[1_0_auto]">
        {/* Button to show/hide completed todos */}
        {/* <button
          onClick={() => setShowCompleted(!showCompleted)}
          className="text-blue-500 hover:text-blue-700"
        >
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button> */}

        {/* Disable the "Clear Completed" button if there are no completed todos */}
        <button
          onClick={clearCompleted}
          disabled={completedTodosCount === 0}
          className={`lg:ml-8 ${completedTodosCount === 0 ? "text-gray-200 cursor-not-allowed" : "text-gray-400 hover:text-blue-500"}`}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Filters;
