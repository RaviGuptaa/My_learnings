import { useState } from "react";
import "./App.css";

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      title: "todo 1",
      description: "this is the description of todo1",
    },
  ]);

  function addTodo() {
    // let newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   title: "new todo",
    //   description: "new todo description",
    // });
    setTodos([
      ...todos,
      { title: "new todo", description: "new todo description" },
    ]);
  }

  return (
    <>
      <div>
        <button onClick={addTodo}>Add a random todo</button>
      </div>
      {/* {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })} */}
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export default App;
