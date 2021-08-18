import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todos={todos}
      task={todo.text}
      todo={todo}
      status={todo.complete}
      setTodos={setTodos}
    />
  ));
};

export default TodoList;
