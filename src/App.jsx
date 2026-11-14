import "./App.css";
import Too from "./Todo";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <Too task='Assignment' isDone={false}></Too>
        </div>
      </section>
    </>
  );
}


export default App;
