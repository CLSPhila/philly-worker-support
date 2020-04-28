import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Questioner from "./components/Questioner";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="">
          <div>
            <h1> Experimental guided interview for CLS.</h1>
            <Questioner></Questioner>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
