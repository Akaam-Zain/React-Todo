import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Login from "./components/LogIn";
import Signup from "./components/Signup";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/todo">
              <Form
                todo={todo}
                setTodo={setTodos}
                input={input}
                setInput={setInput}
              />
              <TodoList todos={todo} setTodos={setTodos} />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
