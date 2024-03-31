import { EditTodo } from "./components/EditTodo/EditTodo";
import { Sidebar } from "./components/Sidebar";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <main className="flex">
          <Sidebar />
          <EditTodo />
        </main>
      </TodoProvider>
    </>
  );
}

export default App;
