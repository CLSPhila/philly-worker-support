import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

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

export const NavBar = (props) => {
  const { toggleDrawer } = props;
  const classes = useStyles();
  return (
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
              <img alt="Community Services of Philadelphia" src="/logo70.png" />
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
  );
};
