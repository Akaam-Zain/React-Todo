import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Edit } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

export default function FormDialog({ todo, setTodos, todos }) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(false);

  const useStyles = makeStyles({
    // style rule
    foo: (props) => ({
      backgroundColor: props.backgroundColor,
    }),
    bar: {
      // CSS property
      color: (props) => props.color,
    },
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (e) => {
    setOpen(false);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: input,
          };
        }

        return item;
      })
    );
  };

  const props = { backgroundColor: "white", color: "black" };
  // Pass the props as the first argument of useStyles()
  const classes = useStyles(props);

  return (
    <div>
      <Button
        startIcon={<Edit />}
        className={`${classes.foo} ${classes.bar}`}
        variant="standard"
        color="white"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task"
            type="email"
            fullWidth
            onChange={handleInput}
            defaultValue={todo.text}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
