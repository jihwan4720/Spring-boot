import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    id : '',
    name : '',
    age : ''
  });

  const [userlist, setUserlist] = useState([]);
  
  useEffect(() => {
    axios.get("/api/users").then((response) => {
      if (response.data) {
        
        setUserlist(response.data);
         
      } else {
        alert("failed to");
      }
    });
  }, []);

  useEffect(() => {
    
  }, []);

  const onClick = () => {
    axios.post("/api/users", {
      id : 3,
      name : 'post추가유저',
      age : 22
    }).then((response) => {
      if (response.data) {
        setUserlist(response.data);
      } else {
        alert("failed to");
      }
    });
  }

  return (
    <div className="App">
      <div>
        <input name="id" value={user.id}  />
        <input name="name" value={user.name} />
        <input name="age" value={user.age} />
        <button onClick={onClick}>추가</button>
      </div>



      <div>
        <button className="btnlist getbtn">GET</button>
        <button className="btnlist postbtn">POST</button>
        <button className="btnlist deletebtn">DELETE</button>
        <button className="btnlist putbtn">PUT</button>
      </div>


      <ul>
        {userlist.map((user,index) => (
          <li key={index}>아이디:{user.id}    이름:{user.name}    나이: {user.age}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
