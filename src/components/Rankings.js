import React, { useEffect, useState } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import RankingsTable from "./RankingsTable";

import { formatTime } from "../utils/timeFormatter";

import { getUsers } from "../actions/trivia";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: "2",
      height: "100%",
    },
  })
);

const Rankings = ({ myOwnProps, ranking, getUsers }) => {
  const classes = useStyles(myOwnProps);

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   handleGetUsers();
  // }, []);

  return (
    <div className={classes.root}>
      <RankingsTable />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  myOwnProps: ownProps,
  ranking: state.triviaReducer.ranking,
});

export default connect(mapStateToProps, { getUsers })(Rankings);
