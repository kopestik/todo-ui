/// <reference types="vite-plugin-svgr/client" />
import { Todo } from "../../contexts/TodoContext";
import { useTodo } from "../../hooks/useTodo";
import Checkmark from "../../assets/check.svg?react";

const TodoItem = (todo: Todo) => {
  const { completeTodo } = useTodo();
  const { id, isCompleted, title } = todo;
  const isCompletedClass = "line-through text-disabled";

  const { setToBeEditedTodo } = useTodo();

  const onEdit = () => {
    setToBeEditedTodo(todo);
  };

  const onComplete = () => {
    completeTodo(id);
  };

  return (
    <li className="flex items-center gap-4 rounded px-4 py-6 bg-white shadow-md font-semibold text-secondary">
      <button
        className={`flex items-center justify-center w-8 h-8 rounded-full border border-secondary ${
          isCompleted ? "bg-success opacity-50 border-success-border" : ""
        }`}
        onClick={onComplete}
      >
        {isCompleted ? <Checkmark /> : ""}
      </button>
      <p className={isCompleted ? isCompletedClass : ""}>{title}</p>
      <button
        className="ml-auto border border-secondary rounded py-2 px-3"
        onClick={onEdit}
      >
        Edit
      </button>
    </li>
  );
};

export { TodoItem };
