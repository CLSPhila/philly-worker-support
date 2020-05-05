import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/pages/LandingPage";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "./components/interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "./components/interviews/UCandPUAQuestions";
import { LeaveBenefitsInterview } from "./components/pages/LeaveBenefitsInterview";
import { UCandPUAInterview } from "./components/pages/UCandPUAInterview";
import { ExplanationPage } from "./components/pages/ExplanationPage";
import AppBar from "@material-ui/core/AppBar";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import CSSBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoButton: {
    marginright: theme.spacing(2),
    padding: theme.spacing(0.3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
  },
}));

const theme = createMuiTheme({
  fontSize: 18,
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
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (e) => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <CSSBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <nav className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.logoButton}
                  color="inherit"
                  aria-label="Community Legal Services site"
                >
                  <Link href="https://clsphila.org">
                    <img
                      alt="Community Services of Philadelphia"
                      src="/logo70.png"
                    />
                  </Link>
                </IconButton>
                <Link component={RouterLink} to="/" className={classes.title}>
                  <Typography variant="h6" className={classes.title}>
                    (DEMO) Working in Philly during a Pandemic
                  </Typography>
                </Link>
                <IconButton
                  edge="start"
                  aria-label="menu"
                  color="inherit"
                  className={classes.menuButton}
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </nav>
          <Container>
            <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
              <List>
                <ListItem button component="a" href="about">
                  <ListItemText>About this site</ListItemText>
                </ListItem>
                <ListItem button component="a" href="/referrals">
                  <ListItemText>Find legal help</ListItemText>
                </ListItem>
              </List>
            </Drawer>
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
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
