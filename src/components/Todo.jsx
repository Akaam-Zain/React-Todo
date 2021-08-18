import React from "react";
import PopUp from "./PopUp";
import Container from "@material-ui/core/Container";
import { ButtonGroup, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    borderRadius: "15px",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "row",
    spacing: "20px",
    alignItems: "center",
    background: "linear-gradient(45deg, #83eaf1 30%, #63a4ff 90%)",
    justifyContent: "center",
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

const Todo = ({ task, todos, todo, status, setTodos }) => {
  const classes = useStyles();
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
      <Container className={classes.paper}>
        <Checkbox type="checkbox" onChange={completedTask} name="" id="" />
        {!todo.completed ? (
          <div>
            <h2
              style={{
                marginRight: "100px",
              }}
            >
              {todo.text}
            </h2>
          </div>
        ) : (
          <h2
            style={{
              textDecoration: "line-through",
              color: "#a6a6a6",
              marginRight: "100px",
            }}
          >
            {todo.text}{" "}
          </h2>
        )}

        <ButtonGroup size="small">
          <PopUp todo={todo} setTodos={setTodos} todos={todos} />
          <Button
            startIcon={<Delete />}
            className="sm"
            type="submit"
            variant="contained"
            color="secondary"
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Todo;
