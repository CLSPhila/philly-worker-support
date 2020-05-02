import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/pages/LandingPage";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "./components/interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "./components/interviews/UCandPUAQuestions";
import { LeaveBenefitsInterview } from "./components/pages/LeaveBenefitsInterview";
import { UCandPUAInterview } from "./components/pages/UCandPUAInterview";
import { ExplanationPage } from "./components/pages/ExplanationPage";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <nav className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link component={RouterLink} to="/">
              <Typography variant="h6" className={classes.title}>
                Working in Philly during a Pandemic
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </nav>
      <Container>
        <Switch>
          <Route exact path={"/" + leaveBenefitsUrl}>
            <LeaveBenefitsInterview />
          </Route>
          <Route exact path={"/" + ucBenefitsUrl}>
            <UCandPUAInterview />
          </Route>
          <Route
            path="/:interviewSlug/:explanationSlug"
            component={ExplanationPage}
          ></Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
