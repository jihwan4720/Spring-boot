import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    id : 1,
    name : '김유저',
    age : 20
  });
  useEffect(() => {
    axios.get("/api/users").then((response) => {
      if (response.data) {
        
        setUser(response.data[0]);
        
      } else {
        alert("failed to");
      }
    });
  }, []);

  // useEffect(() => {
  //   axios.post("/api/users").then((response) => {
  //     if (response.data) {
  //       setUser(response.data);
  //     } else {
  //       alert("failed to");
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <button className="btnlist getbtn">GET</button>
      <button className="btnlist postbtn">POST</button>
      <button className="btnlist deletebtn">DELETE</button>
      <button className="btnlist putbtn">PUT</button>

       <div>
        <p>아이디: {user.id}</p>
        <p>이름 : {user.name}</p>
        <p>나이 : {user.age}</p>
      </div>
    </div>
  );
}

export default App;
