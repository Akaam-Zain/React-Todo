import React from "react";

const Todo = ({ props }) => {
  console.log("This runs");
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};

export default Todo;
