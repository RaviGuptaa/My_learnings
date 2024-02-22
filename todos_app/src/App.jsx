import { useState } from "react";
import "./App.css";

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "go to gym daily",
    },
    {
      title: "Read books",
      description: "Read atleast 10 pages of book daily",
    },
    {
      title: "Drink water",
      description: "Drink atleast 4 litres of water daily",
    },
  ]);

  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export default App;
