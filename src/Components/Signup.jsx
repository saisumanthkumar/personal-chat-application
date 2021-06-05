import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const [data, setdata] = useState([]);
  const [pass, setpass] = useState(true)
  const [pass2, setpass2] = useState(true)


  useEffect(() => {
    axios
      .get("https://chitchat951.herokuapp.com/users")
      .then((res) => setdata(res.data));
  }, []);
  const handleSignup = (e) => {
    e.preventDefault();
    const checkuser = data.includes(username);
    if (!checkuser) {
      if (password.length >= 8) {
        if (password === confirmPassword) {
          const userData = {
            name,
            username,
            password,
          };
          axios.post(
            "https://chitchat951.herokuapp.com/addUser",
            userData
          );
          alert("successfully created a account");
          history.push("/personal-chat-application/");
        } else {
          alert("password and confirm password should be same");
        }
      } else {
        alert("Please!Enter password of length 8 or greater");
      }
    } else {
      alert("User already exists");
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
  const showhide2 =(e)=>{
    e.preventDefault()
    setpass2(!pass2)
    const password = document.getElementById('password2')
    if(pass2){
      password.type ='text'
    }
    else{
      password.type ='password'
    }
  }
  return (
    <div className="over">
      <div className="blur">
        <div className="middle"></div>
        <div className="topright"></div>
        <div className="bottomleft"></div>
      </div>
      <div className="bg">
        <div className="container signup">
          <form onSubmit={handleSignup}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div className="pass">
            <input
              type="password"
              value={password}
              placeholder="Password"
              id="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="showhide"><button onClick={showhide}>{pass?'SHOW':'HIDE'}</button></div>
            </div>
            <div className="pass">
            <input
              type="password"
              id="password2"
              value={confirmPassword}
              placeholder="Confirm password"
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="showhide"><button onClick={showhide2}>{pass2?'SHOW':'HIDE'}</button></div>

            </div>
            <p>
              Already have an account ?<Link to="/"> Log In</Link>
            </p>
            <button>Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
