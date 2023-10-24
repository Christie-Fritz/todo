import logo from "./logo.svg";
import "./App.css";
import Todo from "./todo";
import TodoForm from "./form";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Breakfast",
      isCompleted: false,
    },
    {
      text: "Workout",
      isCompleted: false,
    },
    {
      text: "Homework",
      isCompleted: false,
    },

    {
      text: "Lunch",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="App">
      <h1>To-Do</h1>
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
