import { useTodo } from "../../hooks/useTodo";
import { Header } from "../Header";
import { EditTodoForm } from "./EditTodoForm";

const EditTodo = () => {
  const { toBeEditedTodo } = useTodo();

  return (
    <section className="w-full flex-1 flex flex-col">
      <Header>
        {toBeEditedTodo && (
          <h2 className="flex items-center justify-center w-full text-2xl font-semibold">
            Edit Task
          </h2>
        )}
      </Header>
      {toBeEditedTodo && <EditTodoForm />}
    </section>
  );
};

export { EditTodo };
