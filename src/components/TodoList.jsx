import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todos={todos}
      task={todo.text}
      status={todo.complete}
      setTodo={setTodos}
    />
  ));
};

export default TodoList;
