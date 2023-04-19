import React from "react";

export default function Task({ task }) {
  return (
    <React.Fragment>
      <p>{task.name}</p>
    </React.Fragment>
  );
}
