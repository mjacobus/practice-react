import "./App.css";
import Tasks from "./Tasks/Tasks.js";
import { Provider as TasksProvider } from "./Tasks/context";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Tasks />
      </TasksProvider>
    </div>
  );
}

export default App;
