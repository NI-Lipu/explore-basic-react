import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  function handleCounter() {
    setCount(count + 1);
  }
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <p style={{ marginBottom: "5px" }}>Count: {count}</p>
      <button onClick={handleCounter}>Add</button>
    </div>
  );
}
