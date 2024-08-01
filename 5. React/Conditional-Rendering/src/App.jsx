import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [setbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, title: "todo 1", desc: "Lorem ipsum" },
    { id: 2, title: "todo 2", desc: "Lorem ipsum" },
    { id: 3, title: "todo 3", desc: "Lorem ipsum" },
    { id: 4, title: "todo 4", desc: "Lorem ipsum" },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <div className="m-4 border border-purple-400">
  //       <div className="todo">{todo.id}</div>
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   );
  // };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* to render a list- we use map */}
      {todos.map((todo) => {
        // return  <Todo key={todo.id} todo={todo} />;
        return (
          <div key={todo.id} className="m-4 border border-purple-400">
            <div className="todo">{todo.id}</div>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}

      {/* conditional renering */}

      {/* if-else */}
      {/* {setbtn?<button>Show</button>:"nothing"} */}

      {/* show if only true (if)*/}
      {/* {setbtn && <button>Show</button>} */}

      <div className="card">
        <button onClick={() => setshowbtn(!setbtn)}>click me</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
