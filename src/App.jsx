import { Suspense } from "react";
import "./App.css";
import Users from "./Users";
import UseState from "./UseState";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())

const fetchUsers=async()=>{
 const res= await fetch('https://jsonplaceholder.typicode.com/users')
 return res.json();
}

function App() {

const users= fetchUsers();

  function handleClick() {
    alert("I am clicked.");
  }

  const addHandler = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <div id="center">
        <h1>Get started</h1>

        <Suspense fallback={<h3>Loding...</h3>}>
          <Users users={users}></Users>
        </Suspense>

        <button onClick={handleClick}>Click</button>
        <button onClick={() => alert("click-2")}>Click2</button>
        <button onClick={() => addHandler(10)}>Add 10</button>

        <UseState></UseState>
      </div>
    </>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/users
