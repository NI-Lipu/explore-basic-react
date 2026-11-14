import Actor from "./Actor";
import "./App.css";
import Singer from "./Singer";
import Too from "./Todo";

function App() {
  const actors=["saruk", "salman", "amir"];
  const singers=[
    {id:1, name:"bappa"},
    {id:2, name:"tahsan"},
    {id:3, name:"balam"}
  ]
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          {/* <Too task='Assignment' isDone={false}></Too> */}
          {
            actors.map(actor=><Actor actor={actor}></Actor>)
          }
          {
            singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
          }
        </div>
      </section>
    </>
  );
}


export default App;
