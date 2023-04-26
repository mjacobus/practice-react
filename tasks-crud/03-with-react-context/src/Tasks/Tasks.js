import React, { useContext } from "react";

import { Context } from "./context.js";
import Task from "./Task.js";
import Form from "./Form.js";

export default function Tasks() {
  const ctx = useContext(Context);

  return (
    <React.Fragment>
      <Form onSave={ctx.onSave} />
      {ctx.tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </React.Fragment>
  );
}
