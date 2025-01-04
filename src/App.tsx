import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import { Todo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage on initialization
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, completed: boolean) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string | number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string | number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const handleReorder = (newTodos: Todo[]) => {
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  const visibleTodos = showCompleted
    ? filteredTodos
    : filteredTodos.filter((todo) => !todo.completed);

    return (
      <div className="app-container max-w-lg mx-auto px-4">
        <Header addTodo={addTodo} />
        <TodoList
          todos={visibleTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onReorder={handleReorder}
        />
        {todos.length > 0 && (
          <Filters
            currentFilter={filter}
            setFilter={setFilter}
            activeTodosCount={activeTodosCount}
            completedTodosCount={completedTodosCount}
            clearCompleted={clearCompleted}
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
          />
        )}
        <Footer />
      </div>
    );
};

export default App;
