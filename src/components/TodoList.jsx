import React, { useState } from "react";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    borderRadius: "15px",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "row",
    spacing: "20px",
    alignItems: "center",
    background: "linear-gradient(45deg, #83eaf1 30%, #63a4ff 90%)",
    justifyContent: "center",
    padding: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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
