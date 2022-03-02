import { useState } from "react";
import "./App.css";

function App() {

  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo((current) => {
      return [...current, {
        id: new Date().getTime(),
        isCompleted: false,
        value: inputValue,
      },
    ];
  });
  setInputValue("");
};

const handleComplete = (index) => {
  setTodo((current) => {
    const newList = [...current];
    newList[index].isCompleted = true;
    return newList;
  });
};


const handleDelete = (index) => {
  setTodo((current) => {
    const newList = [...current];
    newList.splice(index, 1);
    return newList;
  })
}
  return (
    <div>
        <ol id="todo-list">
          {todo.map((item, index) => (
          <li className={item.isCompleted === true ? "completed" : ""}>
            <span>{item.value}</span>
            <button onClick={() => handleComplete(index)}>완료</button>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}</ol>
        <form id="create" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(event) => {
              setInputValue(event.target.value);
            }}/>
            <button type="submit">등록</button>
        </form>
    </div>
  );
}

export default App;
