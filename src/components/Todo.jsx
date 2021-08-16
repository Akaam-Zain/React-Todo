import React from "react";

const Todo = ({ task, todos, todo, status, setTodos }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todos.id));
  };

  return (
    <div>
      <h2>{task}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
