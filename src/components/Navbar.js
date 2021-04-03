import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, IconButton, createStyles } from "@material-ui/core";

import SortIcon from "@material-ui/icons/Sort";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      display: "flex",
      justifyContent: "center",
    },
    icon: {
      color: "#fff",
      flex: "1",
      fontSize: "2rem",
    },
    appBarTitle: {
      fontSize: theme.typography.h4.fontSize,
      color: "#fff",
      textDecoration: "none",
      border: "0",
      outline: "0",
    },
    appBarWrapper: {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

const Navbar = (props) => {
  const classes = useStyles(props);

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.appBarWrapper}>
        <Link className={classes.appBarTitle} to="/">
          Trivia
        </Link>
        <IconButton>
          <SortIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
