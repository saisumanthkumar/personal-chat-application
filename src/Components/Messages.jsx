import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillCaretDownFill, BsArrowLeftShort } from "react-icons/bs";
import { useHistory } from "react-router-dom";
function Messages() {
  const [chatid, setchatid] = useState("");
  const [loading, setloading] = useState(true);
  const data = JSON.parse(localStorage.getItem("token"));
  const [chatData, setchatData] = useState([]);
  const [messages, setmessages] = useState([]);
  const [messloading, setmessloading] = useState(true);
  const [addUserName, setaddUserName] = useState("");
  const [text, settext] = useState("");
  const [chatname, setchatname] = useState("");
  const [allUsers, setallUsers] = useState([]);
  const [modal, setmodal] = useState(false);
  const [chatUsers, setchatUsers] = useState([]);
  const [modal2, setmodal2] = useState(false);
  const [open, setopen] = useState(false);

  const [ref, setref] = useState(1);
  const history = useHistory();
  useEffect(() => {
    axios
      .post("https://chitchat951.herokuapp.com/getUsersChatData", {
        id: data.id,
      })
      .then((res) => setchatData(res.data.data));
    setloading(false);
  }, [ref]);
  const getMessageData = (e) => {
    const id = e.currentTarget.id;
    setchatid(id);
    axios
      .post("https://chitchat951.herokuapp.com/participants", { id: id })
      .then((res) => setchatUsers(res.data));
    const chat = e.currentTarget.className;
    setchatname(chat);
    axios
      .post("https://chitchat951.herokuapp.com/getUsersChatMessages", {
        id: id,
      })
      .then((res) => setmessages(res.data));
    setmessloading(false);
    expand();
  };
  const addUser = () => {
    if (addUserName) {
      const item = { id: chatid, username: addUserName };
      axios
        .post("https://chitchat951.herokuapp.com/addUserToChat", item)
        .then((res) => {
          alert(res.data.msg);
          console.log(res);
        });
      setaddUserName("");
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (text) {
      const messagetab = document.getElementById("right");

      axios.post("https://chitchat951.herokuapp.com/sendMessage", {
        id: chatid,
        username: data.username,
        msg: text,
      });
      settext("");
      axios
        .post("https://chitchat951.herokuapp.com/getUsersChatMessages", {
          id: chatid,
        })
        .then((res) => setmessages(res.data));
    }
  };

  useEffect(() => {
    axios
      .get("https://chitchat951.herokuapp.com/users")
      .then((res) => setallUsers(res.data));
  }, [ref]);

  const refresh = () => {
    setloading(true);
    setmessloading(true);
    axios
      .post("https://chitchat951.herokuapp.com/participants", { id: chatid })
      .then((res) => setchatUsers(res.data));

    axios
      .post("https://chitchat951.herokuapp.com/getUsersChatMessages", {
        id: chatid,
      })
      .then((res) => setmessages(res.data));
    setref(ref + 1);
    setmessloading(false);
    setloading(false);
  };

  const expand = () => {
    const element = document.getElementById("leftdup");
    if (!open) {
      element.style.width = "100%";
    } else {
      element.style.width = "0%";
    }
    setopen(!open);
  };

  if (loading === true) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="main">
        <div className="allChatsButton" onClick={expand}>
          <span>
            <BsArrowLeftShort />
          </span>
          <button>All Chats</button>
        </div>
        {modal && (
          <>
            <div className="modal">
              <button onClick={() => setmodal(!modal)}>Close </button>
              <h3>ALL USERS</h3>
              {allUsers.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
          </>
        )}
        {modal2 && (
          <>
            <div className="modal">
              <button onClick={() => setmodal2(!modal2)}>Close</button>
              <h3>ALL USERS</h3>
              {chatUsers.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
          </>
        )}
        <div className="topeff"></div>
        <div className="messages">
          <div className="left" id="left">
            <div className="closebutton">
              <button onClick={expand}>
                <p>Close</p>
              </button>
            </div>
            <div className="all" onClick={() => setmodal(!modal)}>
              <em>ALL GLOBAL USERS</em> <span>{allUsers.length}</span>
            </div>

            <h2>All Chats</h2>

            {chatData.map((item) => (
              <button
                key={item.chatId}
                id={item.chatId}
                className={item.chatname}
                onClick={getMessageData}
              >
                <p>{item.chatname}</p>
              </button>
            ))}
          </div>
          <div className="leftdup" id="leftdup">
            <div className="closebutton">
              <button onClick={expand}>
                <p>Close</p>
              </button>
            </div>
            <div className="all" onClick={() => setmodal(!modal)}>
              <em>ALL GLOBAL USERS</em> <span>{allUsers.length}</span>
            </div>

            <h2>All Chats</h2>

            {chatData.map((item) => (
              <button
                key={item.chatId}
                id={item.chatId}
                className={item.chatname}
                onClick={getMessageData}
              >
                {item.chatname}
              </button>
            ))}
          </div>
          <div className="right" id="right">
            {Boolean(!chatid) && (
              <div className="intro">
                <div className="tetx">
                  <h1>
                    <em> Welcome to CHIT-CHAT</em>
                  </h1>
                  <p>Share with your friends and start texting...</p>
                </div>
              </div>
            )}
            {Boolean(chatid) && (
              <>
                <div className="head">
                  <h2>{chatname}</h2>
                  <p
                    onClick={() => {
                      setmodal2(!modal2);
                    }}
                  >
                    {chatUsers.length} Users
                  </p>
                </div>

                <div className="addUser">
                  <div className="auut">
                    <input
                      type="text"
                      value={addUserName}
                      placeholder="Type username..."
                      onChange={(e) => setaddUserName(e.target.value)}
                    />
                    <button onClick={addUser}>add user</button>
                  </div>
                  <div className="refresh">
                    <button onClick={refresh}>Refresh</button>
                  </div>
                </div>
              </>
            )}
            <div className="allMessages">
              {messages.map((item) => {
                return (
                  <div
                    className={
                      data.username === item.username ? "sentmess" : "message"
                    }
                    key={item._id}
                  >
                    <p className="username">{item.username} </p>
                    <p className="messmain">{item.msg}</p>
                  </div>
                );
              })}
              {Boolean(chatid) && (
                <>
                  <div className="sendMessage">
                    <form>
                      <input
                        type="text"
                        placeholder="Type a message..."
                        value={text}
                        onChange={(e) => settext(e.target.value)}
                      />
                      <button type="submit" onClick={sendMessage}>
                        Send
                      </button>
                    </form>
                  </div>
                </>
              )}
              <div id="last"></div>
            </div>
            {Boolean(chatid) && (
              <div className="boticon">
                <a href="#last">
                  <BsFillCaretDownFill />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
