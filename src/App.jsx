import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import User from "./Components/User";
import './App.css'
function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/personal-chat-application/" exact component={Login} />
          <Route path="/personal-chat-application/Signup" component={Signup} />
          <Route path="/personal-chat-application/user/:id" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
