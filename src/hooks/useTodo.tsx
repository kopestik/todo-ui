import { useContext } from "react";
import { TodoActionsContext, TodoContext } from "../contexts/TodoContext";

const useTodo = () => {
  const { todos, toBeEditedTodo } = useContext(TodoContext);
  const {
    addTodo,
    completeTodo,
    editTodo,
    removeTodo,
    setToBeEditedTodo,
    setTodos,
  } = useContext(TodoActionsContext);

  return {
    todos,
    addTodo,
    editTodo,
    removeTodo,
    completeTodo,
    toBeEditedTodo,
    setToBeEditedTodo,
    setTodos,
  };
};

export { useTodo };
