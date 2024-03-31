import { EditTodo } from "./components/EditTodo/EditTodo";
import { Sidebar } from "./components/Sidebar";
import { TodoProvider } from "./contexts/TodoContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <TodoProvider>
          <main className="flex">
            <Sidebar />
            <EditTodo />
          </main>
        </TodoProvider>
      </UserProvider>
    </>
  );
}

export default App;
