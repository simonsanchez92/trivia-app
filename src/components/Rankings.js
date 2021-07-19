import React from "react";

import { connect } from "react-redux";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import RankingsTable from "./RankingsTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: "2",
      height: "100%",
    },
  })
);

const Rankings = ({ myOwnProps }) => {
  const classes = useStyles(myOwnProps);

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

export default connect(mapStateToProps)(Rankings);
