import React, { useRef } from "react";

import "./form.css";

function generateId() {
  return Math.random();
}

export default function Form({ onSave }) {
  const nameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    onSave({ name: nameRef.current.value, id: generateId() });
    nameRef.current.value = "";
  };
  return (
    <fieldset>
      <form onSubmit={onSubmit}>
        <input type="text" ref={nameRef} />
        <button>Add Task</button>
      </form>
    </fieldset>
  );
}
