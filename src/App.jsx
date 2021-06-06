import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import User from "./Components/User";
import './App.css'
import Other from "./Components/Other";
function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/personal-chat-application/" exact component={Login} />
          <Route path="/personal-chat-application/signup" component={Signup} />
          <Route path="/personal-chat-application/user/:id" component={User} />
          <Route path="*" component={Other} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
