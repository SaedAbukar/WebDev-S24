import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");

  const [count, setCount] = useState(0);

  function setColorDark() {
    setTheme("dark");
  }

  const setColorLight = () => {
    setTheme("light");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const incTheCount = () => setCount((c) => c + 1);

  const decTheCount = () => setCount((c) => c - 1);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={setColorDark}>Dark</button>
      <button onClick={setColorLight}>Light</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>{count}</h2>
      <button onClick={incTheCount}>Increment</button>
      <button onClick={decTheCount}>Decrement</button>
    </div>
  );
};

export default UseState;
