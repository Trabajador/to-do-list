import React from "react";
import { Todo } from "../types";
import { Trash2, GripVertical } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string | number) => void;
  deleteTodo: (id: string | number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-item group flex items-center justify-between p-4 bg-white hover:bg-gray-50">
      <div className="flex items-center space-x-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <div className="checkbox-box">
            <div className="checkbox-gradient" />
            <svg
              className="checkmark-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </label>
        <span
          className={`text-lg px-2 ${todo.completed ? "line-through text-gray-400" : ""}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <span
          onClick={() => deleteTodo(todo.id)}
          className="cursor-pointer text-red-500 opacity-0 group-hover:opacity-100 hover:text-red-700 transition-opacity duration-300"
        >
          <Trash2 className="size-5" />
        </span>
        <span className="cursor-grab text-gray-400 opacity-0 group-hover:opacity-100 hover:text-gray-600 transition-opacity duration-300">
          <GripVertical className="size-5" />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;