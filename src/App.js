import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Questioner from "./components/Questioner";
import ApplyForFMLA from "./components/ApplyForFMLA";
import ApplyForPua from "./components/ApplyForPua";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="">
          <Questioner></Questioner>
        </Route>
        <Route path="apply-for-pua">
          <ApplyForPua />
        </Route>
        <Route path="apply-for-fmla">
          <ApplyForFMLA />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
