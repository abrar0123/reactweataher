import React from "react";
import "./forecast.scss";
import ForecastDetails from "./forecastDetail";

const Forecast = ({ dailyweather }) => {
  return (
    <div className="mainforecast">
      <h3>Hourly ForeCast </h3>
      <ForecastDetails dailyweather={dailyweather} />
    </div>
  );
};

export default Forecast;
