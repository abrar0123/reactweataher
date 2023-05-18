import React, { useEffect, useState } from "react";
import './weather.css'
import moment from "moment/moment";

const MyTime = () => {
  const myMoment = moment();

  const [liveTime, setliveTime] = useState(myMoment);

  useEffect(() => {
    const interval = setInterval(() => {
      setliveTime(myMoment);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="myTime">
      <div className="timeCard">{liveTime.format("HH-mm-ss")}</div>
    </div>
  );
};

export default MyTime;
