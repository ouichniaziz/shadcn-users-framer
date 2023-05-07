import UsersList from "./components/UsersList";
import { DialogAdd } from "./components/DialogAdd";

function App() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <UsersList />
      <DialogAdd />
    </div>
  );
}

export default App;
