import { useState } from "react";
import "./App.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === ""){
      return;
    }
    setTodoList((currentArray) => [...currentArray, todo]); 
    setTodo("");
  }

  return (
  <div>
    <h1>My Todo ({todoList.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todo} type="text" placeholder="Write Your to do..."></input>
      <button>Add To Do</button>
    </form>
    <hr />
    <ol>
    {todoList.map((item, index) => <li key={index}><span>{item}</span></li>)}
    </ol>
  </div>
  )};

export default App;
