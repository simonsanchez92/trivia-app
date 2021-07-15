import React, { useEffect, useState } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import RankingsTable from "./RankingsTable";

import { formatTime } from "../utils/timeFormatter";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: "2",
      height: "100%",
    },
  })
);

const Rankings = (props) => {
  const classes = useStyles(props);

  const [users, setUsers] = useState([]);

  function createData(name, score, time) {
    time = formatTime(time);
    return { name, score, time };
  }
  //Fetch users from database
  const getUsers = async () => {
    const res = await axios.get(
      "http://localhost/trivia-backend/public/api/users"
    );
    const data = await res.data.data;

    let ranking = [];

    //Sort users by score
    ranking = await data
      .sort((a, b) => b.score - a.score)
      .map((user) => {
        return createData(user.name, user.score, user.time);
      });

    setUsers(ranking);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes.root}>
      <RankingsTable users={users} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Rankings);
