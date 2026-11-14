import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <div>
            <Person name="lipu" tech='backkend'></Person>
            <Person name="nihan" tech='frontend'></Person>
            <Person name="Mim"></Person>
          </div>
        </div>
      </section>
    </>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div style={{ border: "2px solid red",marginBottom:'15px', borderRadius: "20px" }}>
      <p>I am: {props.name}</p>
      <p>tech: {props.tech}</p>
    </div>
  );
}

export default App;
