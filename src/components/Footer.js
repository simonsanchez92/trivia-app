import React from "react";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      color: "#eee",
      height: "60px",
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

const Footer = (props) => {
  const classes = useStyles(props);

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Trivia
          </Typography>
        </Toolbar>
      </Container>
    </footer>
  );
};

export default Footer;
