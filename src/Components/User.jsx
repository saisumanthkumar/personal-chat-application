import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Messages from "./Messages";

function User() {
  const [loggedData, setloggedData] = useState({});
  const [userData, setuserData] = useState("");
  const [chatName, setchatName] = useState("");

  const history = useHistory();

  const Alert=(msg)=>{
    const element = document.getElementById('alert')
    element.innerHTML = msg
    element.style.display ='block'
    setTimeout(() => {
    element.style.display ='none'
    }, 2500);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    setloggedData(data);
    axios
      .post("https://chitchat951.herokuapp.com/userData", data)
      .then((res) => {
        if (res.data.type === "success") {
          setuserData(res.data.msg);
        } else {
          Alert(res.data.msg);
          history.push("/personal-chat-application/");
        }
      });
  }, []);

  const createChat = () => {
    if (chatName !== "") {
      const PostItem = { chatname: chatName, username: loggedData.username };
      axios.post(
        "https://chitchat951.herokuapp.com/createChat",
        PostItem
      );
      Alert(`successfully created ${chatName} chat`);
      setchatName("");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/personal-chat-application/");
  };

  return (
    <div className="body">
      <div className="alert" id="alert" style={{display:'none'}}></div>
      
      <div className="createChat">
        <div className="item">
          <input
            type="text"
            value={chatName}
            placeholder="start a new chat"
            onChange={(e) => setchatName(e.target.value)}
          />
          <button onClick={createChat}>Create Chat</button>
        </div>
        <div className="logout">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <Messages />
    </div>
  );
}

export default User;
