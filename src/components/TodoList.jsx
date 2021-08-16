import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ props }) {
  return <Todo tasks={props} />;

  // todo.map((todo) =>
  //     <TODO tasks={todo}/>
  // )
}

export default TodoList;
