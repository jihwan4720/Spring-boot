import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    age: "",
  });

  const { id, name, age } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const userlist = user.map((userx) => (
    <li key={userx.id}>
      아이디 : {userx.id} | 이름 : {userx.username} | 나이 :{userx.age}
    </li>
  ));

  const onGetClick = () => {
    axios.get("/api/users").then((response) => {
      if (response.data) {
        const templist = response.data.slice();
        setUser(templist);
      } else {
        alert("failed to");
      }
    });
  };

  const onPostClick = () => {
    axios
      .post("/api/users", null, {
        params: {
          id: id,
          name: name,
          age: age,
        },
      })
      .then((response) => {
        if (response.data) {
          const templist = response.data.slice();
          setUser(templist);
        } else {
          alert("failed to");
        }
      });
  };

  const onDeleteClick = () => {
    axios
      .delete("/api/users", {
        params: { id: id },
      })
      .then((response) => {
        if (response.data) {
          const templist = response.data.slice();
          setUser(templist);
        }
      });
  };

  const onPutClick = () => {
    axios
      .put("/api/users", null, {
        params: {
          id: id,
          name: name,
          age: age,
        },
      })
      .then((response) => {
        if (response.data) {
          const templist = response.data.slice();
          setUser(templist);
        } else {
          alert("failed to");
        }
      });
  };

  return (
    <div className="App">
      <div>
        <form>
          <span>id </span>
          <input name="id" onChange={onChange} value={id} />
          &nbsp;&nbsp;&nbsp;
          <span>name </span>
          <input name="name" onChange={onChange} value={name} />
          &nbsp;&nbsp;&nbsp;
          <span>age </span>
          <input name="age" onChange={onChange} value={age} />
          <button type="submit">추가</button>
        </form>
      </div>

      <div>
        <button className="btnlist getbtn" onClick={onGetClick}>
          GET
        </button>
        <button className="btnlist postbtn" onClick={onPostClick}>
          POST
        </button>
        <button className="btnlist deletebtn" onClick={onDeleteClick}>
          DELETE
        </button>
        <button className="btnlist putbtn" onClick={onPutClick}>
          PUT
        </button>
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
