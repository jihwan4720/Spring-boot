import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    axios.post("/api/users").then((response) => {
      if (response.data) {
        setUser(response.data);
      } else {
        alert("failed to");
      }
    });
  }, []);

  return (
    <div className="App">
      <button className="btnlist getbtn">GET</button>
      <button className="btnlist postbtn">POST</button>
      <button className="btnlist deletebtn">DELETE</button>
      <button className="btnlist putbtn">PUT</button>
    </div>
  );
}

export default App;
