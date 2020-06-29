import React, { useState } from "react";
import "../styles/main.scss";
export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => {
  let [count, setCount] = useState(0);
  const increment = (): void => {
    setCount(++count);
  };
  return (
    <div className="main">
      <h2>Welcome to React Typescript</h2>
      <button style={{ maxWidth: "82px" }} onClick={increment}>
        Increment
      </button>
      <div> Current count : {count}</div>
    </div>
  );
};
