import React from "react";
import "./forecast.scss";
import moment from "moment";

const Forecast = ({ dailyweather }) => {
  console.log("dailyweather__", dailyweather);

  const myDailyWeather = dailyweather?.list?.splice(0, 7);

  console.log("myDailyWeather__", myDailyWeather);

  return (
    <div className="forecast flex">
      {myDailyWeather &&
        myDailyWeather.map((item) => {
          const now = moment(item.dt_txt);

          const time = now.format("hh:mm A");
          const date = now.format("dddd DD MMM");
          return (
            <div className="dailywweatherCard flexc spaceb">
              <h2>{item.main.temp}° C</h2>
              <h4>{time}</h4>
              <h4>{date}</h4>
              <h4>{item.weather[0].description}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default Forecast;
