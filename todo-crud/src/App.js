import "./App.css";
import Tasks from "./Tasks/Tasks.js";

const defaultTasks = [
  {
    id: 1,
    name: "Do the dishes",
  },
  {
    id: 2,
    name: "Walk the dogs",
  },
  {
    id: 3,
    name: "Prepare lunch",
  },
];

function App() {
  return (
    <div className="App">
      <Tasks taskList={defaultTasks} />
    </div>
  );
}

export default App;
