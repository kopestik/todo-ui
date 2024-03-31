/// <reference types="vite-plugin-svgr/client" />
import { useTodo } from "../../hooks/useTodo";
import { TodoItem } from "../TodoItem";
import PlusIcon from "../../assets/plus.svg?react";

const Todos = () => {
  const { todos, addTodo } = useTodo();

  const onAddTodo = () => {
    addTodo("New Todo");
  };

  return (
    <section className="relative flex-1 flex flex-col pb-24">
      <ul className="flex flex-col gap-8 overflow-auto flex-1 basis-0 p-6">
        {todos && todos.map((todo) => <TodoItem {...todo} key={todo.id} />)}
      </ul>
      <button
        className="absolute bottom-5 right-5 bg-primary border-primary-border border-2 p-4 rounded-full w-14 h-14 bottom-shadow"
        onClick={onAddTodo}
      >
        <PlusIcon />
      </button>
    </section>
  );
};

export { Todos };
