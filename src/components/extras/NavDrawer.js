import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useItemStyles = makeStyles((theme) => ({
  primary: {
    fontSize: "1.5rem",
  },
}));

export const NavDrawer = (props) => {
  const { isOpen, setOpen } = props;
  const itemStyles = useItemStyles();

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
      <List>
        <ListItem button component="a" href="/about">
          <ListItemText classes={itemStyles}>About this site</ListItemText>
        </ListItem>
        <ListItem button component="a" href="/referrals">
          <ListItemText classes={itemStyles}>Find legal help</ListItemText>
        </ListItem>
        <ListItem button component="a" href="/privacy">
          <ListItemText classes={itemStyles}>Privacy Policy</ListItemText>
        </ListItem>
        <ListItem button component="a" href="/feedback">
          <ListItemText classes={itemStyles}>Feedback</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
