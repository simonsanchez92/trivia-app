import React, { useEffect, useState } from "react";
import axios from "axios";

import { connect } from "react-redux";

import RankingsTable from "./RankingsTable";

const Rankings = () => {
  const [users, setUsers] = useState([]);

  function createData(name, score, time) {
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
    <div>
      {users === undefined ? <h1>Holi</h1> : <RankingsTable users={users} />}
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Rankings);
