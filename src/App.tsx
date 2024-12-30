import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [personName, setPersonName] = useState("Nina");
  const [count, setCount] = useState(10);

  const animal = "dog";
  //   const [userInfo, setUserInfo] = useState({
  //     name: "",
  //     age: 0,
  //     education: "",
  //   });

  function conditional(angka: number) {
    // console.log(angka);
    if (angka < 5) {
      const result = angka + 1;

      setCount(result);
    } else if (angka > 5) {
      const result = angka - 1;

      setCount(result);
    } else if (angka === 5) {
      setCount(angka);
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: 700 }}>{count}</span>
          <p>{personName}</p>
        </div>
        <button
          onClick={() => {
            // conditional(15);
            setPersonName("Yani");

            // handleSetName("Yani")
            // setCount(5);
            // setPersonName("Ari");
            // handleChange(5, "Ari");
          }}
        >
          Change
        </button>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
