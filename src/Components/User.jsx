import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Messages from "./Messages";

function User() {
  const [loggedData, setloggedData] = useState({});
  const [userData, setuserData] = useState("");
  const [chatName, setchatName] = useState("");

  const history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    setloggedData(data);
    axios
      .post("https://chitchat951.herokuapp.com/userData", data)
      .then((res) => {
        if (res.data.type === "success") {
          setuserData(res.data.msg);
        } else {
          alert(res.data.msg);
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
      alert(`successfully created chat ${chatName}`);
      setchatName("");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/personal-chat-application/");
  };

  return (
    <div className="body">
      
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
