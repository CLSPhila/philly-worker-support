import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/pages/LandingPage";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "./components/interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "./components/interviews/UCandPUAQuestions";
import { LeaveBenefitsInterview } from "./components/pages/LeaveBenefitsInterview";
import { UCandPUAInterview } from "./components/pages/UCandPUAInterview";
import { ExplanationPage } from "./components/pages/ExplanationPage";
import { PageNotFound } from "./components/pages/PageNotFound";
import { About } from "./components/pages/About";
import { Referrals } from "./components/pages/Referrals";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { Feedback } from "./components/pages/Feedback";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { NavBar } from "./components/extras/NavBar";
import { NavDrawer } from "./components/extras/NavDrawer";
import CSSBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { DemoWarning } from "./components/extras/DemoWarning";
import { Programs } from "./components/pages/programs";
import { FFCRAChildcare } from "./components/pages/programs/FFCRAChildcare";
import { FFCRASickLeave } from "./components/pages/programs/FFCRASickLeave";
import { PhillySickLeave } from "./components/pages/programs/PhillySickLeave";
import { FMLA } from "./components/pages/programs/FMLA";
import { UC } from "./components/pages/programs/UC";
import { PUA } from "./components/pages/programs/PUA";

const theme = createMuiTheme({
  typography: {
    body2: "1rem",
  },
  palette: {
    primary: {
      main: "#454988",
    },
    secondary: {
      main: "#c6941F",
    },
  },
});

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (e) => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <CSSBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar toggleDrawer={toggleDrawer} />
          <NavDrawer isOpen={isOpen} setOpen={setOpen} />
          <DemoWarning />
          <Container maxWidth="md">
            <Switch>
              <Route exact path={"/questions/" + leaveBenefitsUrl}>
                <LeaveBenefitsInterview />
              </Route>
              <Route exact path={"/questions/" + ucBenefitsUrl}>
                <UCandPUAInterview />
              </Route>
              <Route exact path={"/about"}>
                <About />
              </Route>
              <Route exact path={"/referrals"}>
                <Referrals />
              </Route>
              <Route exact path={"/privacy"}>
                <PrivacyPolicy></PrivacyPolicy>
              </Route>
              <Route exact path={"/feedback"}>
                <Feedback />
              </Route>
              <Route exact path={"/programs"}>
                <Programs />
              </Route>
              <Route exact path={"/programs/ffcra-sick-leave"}>
                <FFCRASickLeave />
              </Route>
              <Route exact path={"/programs/ffcra-childcare"}>
                <FFCRAChildcare />
              </Route>
              <Route exact path={"/programs/philly-sick-leave"}>
                <PhillySickLeave />
              </Route>
              <Route exact path={"/programs/fmla"}>
                <FMLA />
              </Route>
              <Route exact path={"/programs/uc"}>
                <UC />
              </Route>
              <Route exact path={"/programs/pua"}>
                <PUA />
              </Route>
              <Route
                path="/questions/:interviewSlug/:explanationSlug"
                component={ExplanationPage}
              ></Route>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route component={PageNotFound} />
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
