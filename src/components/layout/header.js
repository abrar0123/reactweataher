import React, { useEffect, useState } from "react";
import "./header.css";
import moment from "moment";
import Search from "../search/search";

const Header = (props) => {
  const myMoment = moment();
  // console.log("weatherdata__", weather);
  const [liveTime, setliveTime] = useState(myMoment);

  useEffect(() => {
    const interval = setInterval(() => {
      setliveTime(myMoment);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <header>
      <div className="flex spacea">
        <h3 style={{ textTransform: "uppercase" }}>Weather App</h3>
        {/* <h3 style={{ textTransform: "capitalize" }}> Gujrat TimeZone</h3> */}
        <Search
          onChangeSearch={props.onChangeSearch}
          weatherhandler={props.weatherhandler}
          forecastApiData={props.forecastApiData}
        />
        <h3 style={{ color: "cyan" }}>{liveTime.format("hh:mm:ss A")}</h3>
      </div>
    </header>
  );
};

export default Header;
