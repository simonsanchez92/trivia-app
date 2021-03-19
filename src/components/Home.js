import React from "react";

import { connect } from "react-redux";

import Header from "./Header";

const Home = (props) => {
  return <Header />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Home);
