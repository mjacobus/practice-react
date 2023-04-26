import React, { useState } from "react";

import "./form.css";

function generateId() {
  return Math.random();
}

export default function Form({ onSave }) {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onSave({ name, id: generateId() });
    setName("");
  };
  return (
    <fieldset>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </fieldset>
  );
}
