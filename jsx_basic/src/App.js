// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created ✔");
    return () => console.log("Destroyed ❌");
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
}


// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setCounter((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value); 

//   useEffect(() => {
//     console.log("CALL THE API... (한번만 실행되야 하는 코드)");
//   }, []);
//   useEffect(() => {
//     // if(keyword !== "" && keyword.length > 5) {
//     //   console.log("SEARCH FOR", keyword);
//     // }
//     console.log("검색창에 input이 들어왔을 때 실행되는 코드")
//   }, [keyword]);
//   useEffect(() => {
//     console.log("카운터가 변경될 때 실행되는 코드");
//   }, [counter]);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search Here..."/>
//       <h1 className={styles.title}>{counter}</h1>
//       <Button text={"Continue"}/>
//       <button onClick={onClick}>Click me~</button>
//     </div>
//   );
// }

export default App;
