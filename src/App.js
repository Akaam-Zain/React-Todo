import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Login from "./components/LogIn";
import Signup from "./components/Signup";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/todo">
            <Form
              todo={todo}
              setTodo={setTodo}
              input={input}
              setInput={setInput}
            />

            <TodoList todo={todo} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
