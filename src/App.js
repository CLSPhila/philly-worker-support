import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/pages/LandingPage";
import { LeaveBenefitsInterview } from "./components/pages/LeaveBenefitsInterview";
import { UCandPUAInterview } from "./components/pages/UCandPUAInterview";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/leave-benefits">
          <LeaveBenefitsInterview />
        </Route>
        <Route path="/uc-pua-benefits">
          <UCandPUAInterview />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
