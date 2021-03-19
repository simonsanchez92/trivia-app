import React from "react";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Trivia
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
