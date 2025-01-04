import React, { useState } from "react";
import { Moon } from "lucide-react";

interface HeaderProps {
  addTodo: (text: string, completed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(e.target.checked);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTodo.trim()) {
      addTodo(newTodo, isCompleted);
      setNewTodo("");
      setIsCompleted(false);
    }
  };

  return (
    <header className="relative">
      <div className="flex items-center justify-between text-white mb-10 pt-20">
        <h1 className="font-bold text-5xl tracking-[.25em]">TODO</h1>
        <Moon className="size-10 stroke-transparent fill-white"/>
      </div>
      <div className="flex items-center space-x-4 header-container rounded-xl shadow-md p-4 bg-white">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckboxChange}
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
        <span className="sr-only">Completed</span>
      </label>

      <input
        type="text"
        className="rounded-lg px-2 w-full sm:w-4/5 border-unset border-gray-300 focus:outline-none"
        placeholder="Create a new todo..."
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      </div>
      <div className="bg-container"></div>
    </header>
  );
};

export default Header;
