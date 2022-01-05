import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter] = useState(1);
  useEffect(() => {
    setCounter((prevState) => {
      const newState = prevState + 1;
      return newState;
    })
  },[])
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">Counter({counter})</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
