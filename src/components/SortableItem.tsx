// src/components/SortableItem.tsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface SortableItemProps {
  todo: Todo;
  toggleComplete: (id: string | number) => void;
  deleteTodo: (id: string | number) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    boxShadow: transform ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TodoItem
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default SortableItem;
