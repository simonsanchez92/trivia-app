import React from "react";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      color: "#eee",
      height: "50px",
      backgroundColor: theme.palette.primary.dark,
      display: "flex",
      alignItems: "center",
      marginTop: "100px",
    },
    inner: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    innerText: {
      fontSize: "1.1rem",
    },
  })
);

const Footer = (props) => {
  const classes = useStyles(props);

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} maxWidth="lg">
        <span className={classes.innerText}>© 2021 Trivia</span>
        <span className={classes.innerText}>Developed by Simon Sanchez</span>
      </Container>
    </footer>
  );
};

export default Footer;
