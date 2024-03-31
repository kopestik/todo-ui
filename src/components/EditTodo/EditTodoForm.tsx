import { ChangeEvent, useState } from "react";
import { useTodo } from "../../hooks/useTodo";

const EditTodoForm = () => {
  const { toBeEditedTodo, setToBeEditedTodo } = useTodo();
  const { editTodo, removeTodo } = useTodo();
  const [newTodoName, setNewTodoName] = useState(toBeEditedTodo?.title);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setNewTodoName(e.target.value);
  };

  const onSave = () => {
    if (toBeEditedTodo !== undefined) {
      editTodo(toBeEditedTodo.id, newTodoName || "");
      setToBeEditedTodo(undefined);
    }
  };

  const onDelete = () => {
    if (toBeEditedTodo !== undefined) {
      removeTodo(toBeEditedTodo.id);
      setToBeEditedTodo(undefined);
    }
  };

  return (
    <form className="flex-1 flex flex-col p-6 gap-2">
      <label htmlFor="todo" className="text-lg">
        Task Name
      </label>
      <input
        id="todo"
        className="rounded-lg border-2 border-input-border p-4 text-2xl text-primary-border"
        type="text"
        placeholder={`${newTodoName}`}
        value={newTodoName}
        onChange={onInputChange}
      />
      <div className="mt-auto w-full flex gap-4 max-w-[750px] mx-auto">
        <button
          className="bg-danger border-2 border-danger-border text-white px-8 py-4 rounded-lg text-shadow bottom-shadow"
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          className="flex-1 bg-primary border-2 border-primary-border text-white px-6 py-4 rounded-lg text-shadow bottom-shadow"
          type="button"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export { EditTodoForm };
