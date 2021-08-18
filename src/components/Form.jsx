import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";

const Form = ({ todo, setTodo, input, setInput }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexDirection: "row",
      width: "500px",
      height: "30px",
      display: "flex",
      marginTop: "30px",
    },

    paper: {
      borderRadius: "15px",
      display: "flex",
      spacing: "20px",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
    },
  }));

  const inputTextHandler = (e) => {
    e.preventDefault();

    setInput(e.target.value);
    console.log(input);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { id: Math.random() * 1000, text: input, completed: false },
    ]);
    setInput(" ");
    console.log(...todo);
  };
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.paper}>
        <form className={classes.root}>
          <input
            value={input}
            onChange={inputTextHandler}
            type="text"
            placeholder="Add Task"
          />
          <Button onClick={addTask}>Add Task</Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
