import React, { useState } from "react";

const button = document.getElementById("button");

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 id="count">count {count}</h2>
      <button id="button" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
};

export default Counter;

// button.addEventListener("click", () => {
//   document.getElementById("count").innerHTML = "count " + count + 1;
// });
