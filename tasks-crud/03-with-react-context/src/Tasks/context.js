import { useState, createContext } from "react";

const DEFAULT_CONTEXT = {
  onSave: (_task) => {},
  setTasks: (_tasks) => {},
  tasks: [],
};
const Context = createContext(DEFAULT_CONTEXT);

const Provider = function ({ children }) {
  const [tasks, setTasks] = useState([]);

  const onSave = (task) => {
    setTasks((prevState) => {
      return [task, ...prevState];
    });
  };

  const value = {
    onSave,
    tasks,
    setTasks,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Provider, Context };
