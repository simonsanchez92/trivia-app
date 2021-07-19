import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { getTime } from "../actions/trivia";

import { formatTime } from "../utils/timeFormatter";

const Watch = ({ getTime }) => {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    countRef.current = setInterval(() => {
      getTime(timer);
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => clearInterval(countRef.current);
  }, [timer, getTime]);

  return (
    <div className="stopwatch-card">
      <p>{formatTime(timer)}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getTime })(Watch);
