import "./App.css";

function App() {
  function handleClick() {
    alert("I am clicked.");
  }

  const addHandler=(num)=>{
    alert(num+5);
  }
  return (
    <>
      <div id="center">
        <h1>Get started</h1>
        <button onClick={handleClick}>Click</button>
        <button onClick={() => alert("click-2")}>Click2</button>
        <button onClick={()=>addHandler(10)}>Add 10</button>
      </div>
    </>
  );
}

export default App;
