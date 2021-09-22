import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  // const [userlist, setUserlist] = useState([]);

  const userlist = user.map(name => (
    <li key={name.id}>{name.name}&nbsp;&nbsp;&nbsp;{name.age}</li>
  ));
  
  
  useEffect(() => {
    axios.get("/api/users").then((response) => {
    
      if (response.data) {
        const templist = user.concat({
          id: response.data.id,
          name: response.data.name,
          age : response.data.age
        });
        
        setUser(templist);
      } else {
        alert("failed to");
      }
    });
  },[])


  const onPostClick = () => {
    
    axios.post("/api/userss", null , {params : {
      id : 3,
      name : 'post추가유저',
      age : 23

    }}).then((response) => {
      if (response.data) {
        const templist = user.concat({
          id: response.data.id,
          name: response.data.name,
          age : response.data.age
        });
        setUser(templist);
        debugger;
      } else {
        alert("failed to");
      }
    });
  }
 

  const onClick = () => {
    
  }

  return (
    <div className="App">
      <div>
        <input name="id" />
        <input name="name" />
        <input name="age" />
        <button onClick={onClick}>추가</button>
      </div>



      <div>
        <button className="btnlist getbtn">GET</button>
        <button className="btnlist postbtn" onClick={onPostClick}>POST</button>
        <button className="btnlist deletebtn">DELETE</button>
        <button className="btnlist putbtn">PUT</button>
      </div>


      <ul>
        {/* {userlist.map((user,index) => (
          <li key={index}>아이디:{user.id}    이름:{user.name}    나이: {user.age}</li>
        ))} */}
        {userlist}
      </ul>

    </div>
  );
}

export default App;
