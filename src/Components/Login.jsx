import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [pass, setpass] = useState(true)

  const Alert=(msg)=>{
    const element = document.getElementById('alert')
    element.innerHTML = msg
    element.style.display ='block'
    setTimeout(() => {
    element.style.display ='none'
    }, 2500);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      const user = { username, password };
      axios
        .post("https://chitchat951.herokuapp.com/login", user)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem(
              "token",
              JSON.stringify({ ...res.data, timestamp: new Date().getTime() })
            );
            history.push(`/personal-chat-application/user/${res.data.username}`);
          }
        })
        .catch((err) => Alert("Please!Check your username and password"));
    } else {
      Alert("Please!Enter password of length 8 or greater");
    }
  };

  const showhide =(e)=>{
    e.preventDefault()
    setpass(!pass)
    const password = document.getElementById('password')
    if(pass){
      password.type ='text'
    }
    else{
      password.type ='password'
    }
  }

  return (
    <div className="over">
      <div className="alert" id="alert" style={{display:'none'}}></div>
      <div className="blur">
        <div className="middle"></div>
        <div className="topright"></div>
        <div className="bottomleft"></div>
      </div>
      <div className="bg">
        <div className="container">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div className="pass">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="showhide"><button onClick={showhide}>{pass?'SHOW':'HIDE'}</button></div>
            </div>
            <p>
              Don't have an account?<Link to="/personal-chat-application/signup"> Sign up</Link>
            </p>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
