import { useState } from "react";

export default function UseState() {
  const [score, setScore] = useState(0);

  function handleCounter(run) {
    setScore(score + run);
  }
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <p style={{ marginBottom: "5px" }}>Score: {score}</p>
      <button onClick={()=>handleCounter(1)}>single</button>
      <button onClick={()=>handleCounter(4)}>Four</button>
      <button onClick={()=>handleCounter(6)}>Six</button>
    </div>
  );
}
