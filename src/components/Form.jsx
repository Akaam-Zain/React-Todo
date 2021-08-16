import React, { useState } from "react";
import TodoList from "./TodoList";

const Form = ({ todo, setTodo, input, setInput }) => {
  const inputTextHandler = (e) => {
    e.preventDefault();

    setInput(e.target.value);
    console.log(input);
  };

  const addTask = (e) => {
    e.preventDefault();

    console.log("Add Task Clicked");

    //TODO : Add autogenerated ID

    setTodo([
      ...todo,
      { id: Math.random() * 1000, text: input, completed: false },
    ]);
    setInput(" ");
    console.log(...todo);
  };

  return (
    <div>
      <form>
        <input
          value={input}
          onChange={inputTextHandler}
          type="text"
          placeholder="Add Task"
        />
        <button onClick={addTask}>Add Task</button>
      </form>
    </div>
  );
};

export default Form;
