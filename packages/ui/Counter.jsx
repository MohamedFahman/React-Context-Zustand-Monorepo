import { useState } from "react";
import { RenderCounter } from "./RenderCounter";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Local Counter (Child of App)</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <RenderCounter name="Counter" />
    </div>
  );
};
