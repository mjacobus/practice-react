import React, { useState } from "react";

import Task from "./Task.js";
import Form from "./Form.js";

export default function Tasks({ taskList }) {
  const [tasks, setTasks] = useState(taskList);
  const onSave = (task) => {
    setTasks((prevState) => {
      return [task, ...prevState];
    });
  };

  return (
    <React.Fragment>
      <Form onSave={onSave} />
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </React.Fragment>
  );
}
