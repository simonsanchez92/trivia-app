import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import store from "../store";
import { useHistory } from "react-router-dom";

import { getQuestions, setUser, resetState } from "../actions/trivia";

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      display: "flex",
      justifyContent: "center",
      padding: "40px 0 0 0",
      margin: "20px 0",
      flexDirection: "column",
      alignItems: "center",
    },
    hero: {
      backgroundColor: "#eee",
      margin: "0 10px",
      padding: "0 15px 15px 15px",
      border: "1px solid black",
      borderRadius: "4px",
      zIndex: "10",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "500px",
      maxWidth: "80%",
    },
    heroTitle: {
      fontSize: "2rem",
      textAlign: "center",
    },
    heroBtns: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    playBtnContainer: {
      display: "flex",
      margin: "20px 0",
    },
    textField: {
      flex: "1",
    },
    rankingsLink: {
      textDecoration: "none",
      color: "#eee",
    },
    paper: {
      padding: "10px",
      border: "2px solid black",
    },
  })
);

const Home = ({ ownProps, resetState }) => {
  const classes = useStyles(ownProps);
  const history = useHistory();

  const [formData, setFormData] = useState("");
  const [textFieldError, setTextFieldError] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (formData !== "") {
      setTextFieldError(false);
      setOpen(true);
    } else {
      setTextFieldError(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTextFieldError(false);
  };

  const handleChange = (e) => {
    setTextFieldError(false);
    setFormData(e.target.value);
  };

  const handlePlay = () => {
    if (formData !== "") {
      store.dispatch(getQuestions());
      store.dispatch(setUser(formData));
      history.push("/game");
    }
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.hero}>
        <h1 className={classes.heroTitle}>Ready to test your knowledge?</h1>
        <div className={classes.heroBtns}>
          <div className={classes.playBtnContainer}>
            <TextField
              value={formData}
              onChange={(e) => handleChange(e)}
              className={classes.textField}
              variant="outlined"
              size="small"
              error={textFieldError}
              label="Your name:"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Play
            </Button>
            <div>
              <Dialog
                classes={{
                  paper: classes.paper,
                }}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
                // aria-labelledby="alert-dialog-title"
                // aria-describedby="alert-dialog-description"
              >
                <h3 style={{ fontSize: "2rem", textAlign: "Center" }}>
                  Ready to play?
                </h3>

                <p style={{ fontSize: "1.2rem" }} id="alert-dialog-description">
                  Before clicking "Yes", focus and prepare to answer 20 multiple
                  choice questions of general knowledge
                </p>

                <DialogActions className={classes.dialogBox}>
                  <Button onClick={() => handlePlay()} color="primary">
                    Yes
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    No
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <Button color="primary" variant="contained">
            <Link className={classes.rankingsLink} to="/rankings">
              See Rankings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, { resetState })(Home);
