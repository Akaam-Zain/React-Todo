import React from "react";
import PopUp from "./PopUp";

const Todo = ({ task, todos, todo, status, setTodos }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedTask = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  return (
    <div>
      {!todo.completed ? (
        <h2>{todo.text}</h2>
      ) : (
        <h2 style={{ textDecoration: "line-through" }}>{todo.text} </h2>
      )}

      <button onClick={deleteHandler}>Delete</button>
      <PopUp todo={todo} setTodos={setTodos} todos={todos} />
      <input type="checkbox" onChange={completedTask} name="" id="" />
    </div>
  );
};

export default Todo;
