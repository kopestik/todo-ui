import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

const TodoContext = createContext<TodoContextProps>({
  toBeEditedTodo: undefined,
  todos: [],
});

const TodoActionsContext = createContext<TodoActionsContextProps>({
  addTodo: () => {},
  removeTodo: () => {},
  completeTodo: () => {},
  editTodo: () => {},
  setToBeEditedTodo: () => {},
  setTodos: () => {},
});

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [toBeEditedTodo, setToBeEditedTodo] = useState<Todo>();
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localTodos = localStorage.getItem("todos");

    if (localTodos) return JSON.parse(localTodos);

    return [];
  });

  const addTodo = (title: string) => {
    const newTodo = { title, id: new Date().toISOString(), isCompleted: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter(({ id: todoId }) => todoId !== id)
    );
  };

  const findTodo = (todos: Todo[], id: string) => {
    return todos.findIndex(({ id: todoId }) => todoId === id);
  };

  const completeTodo = (id: string) => {
    setTodos((prevTodos) => {
      const todosCopy = JSON.parse(JSON.stringify(prevTodos)); // deep copy
      const toBeEditedTodoIndex = findTodo(todosCopy, id);
      const todo = todosCopy[toBeEditedTodoIndex];

      if (toBeEditedTodoIndex === -1) return prevTodos;

      todo.isCompleted = !todo.isCompleted;

      return todosCopy;
    });
  };

  const editTodo = (id: string, newTitle: string) => {
    setTodos((prevTodos) => {
      const todosCopy = [...prevTodos];
      const toBeEditedTodoIndex = findTodo(todosCopy, id);

      if (toBeEditedTodoIndex === -1) return prevTodos;

      todosCopy[toBeEditedTodoIndex].title = newTitle;

      return todosCopy;
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ toBeEditedTodo, todos }}>
      <TodoActionsContext.Provider
        value={{
          addTodo,
          editTodo,
          removeTodo,
          completeTodo,
          setToBeEditedTodo,
          setTodos,
        }}
      >
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};

interface TodoContextProps {
  toBeEditedTodo?: Todo;
  todos: Todo[];
}

interface TodoActionsContextProps {
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  editTodo: (id: string, newTitle: string) => void;
  setToBeEditedTodo: Dispatch<SetStateAction<Todo | undefined>>;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

interface TodoProviderProps {
  children: ReactNode;
}

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export { TodoProvider, TodoContext, TodoActionsContext };
