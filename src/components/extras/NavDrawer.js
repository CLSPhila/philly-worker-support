import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const NavDrawer = (props) => {
  const { isOpen, setOpen } = props;

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
      <List>
        <ListItem button component="a" href="/about">
          <ListItemText>About this site</ListItemText>
        </ListItem>
        <ListItem button component="a" href="/referrals">
          <ListItemText>Find legal help</ListItemText>
        </ListItem>
        <ListItem button component="a" href="/privacy">
          <ListItemText>Privacy Policy</ListItemText>
        </ListItem>
        <ListItem button component="a" href="/feedback">
          <ListItemText>Feedback</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
