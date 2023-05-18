import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Weather from "./components/weather/weather";
import { APIkey, weatherEndPoints } from "./components/search/api";
import Forecast from "./components/forecast/forecast";

function App() {
  const [weatherdata, setweather] = useState([]);
  const [dailyweather, setdailyweather] = useState([]);
  const [search, setsearch] = useState();
  const [state, setstate] = useState({ lat: 0, lon: 0 });

  const handleSearch = (mySearch) => {
    setsearch(mySearch);
    setstate({ lat: mySearch.value.lat, lon: mySearch.value.long });
    console.log("search", mySearch);
  };

  console.log("state__", state);

  const weatherApiData = async () => {
    try {
      const response = await fetch(
        `${weatherEndPoints}/weather?lat=${state.lat}&lon=${state.lon}&appid=${APIkey}&units=metric`
      );
      const result = await response.json();
      setweather(result);
    } catch (error) {
      console.error("result_error", error);
    }
  };

  const forecastApiData = async () => {
    try {
      const response = await fetch(
        `${weatherEndPoints}/forecast?lat=${state.lat}&lon=${state.lon}&appid=${APIkey}&units=metric`
      );
      const result = await response.json();

      setdailyweather(result);
    } catch (error) {
      console.error("result_error", error);
    }
  };

  return (
    <div className="body">
      <Header
        onChangeSearch={handleSearch}
        weatherhandler={weatherApiData}
        forecastApiData={forecastApiData}
      />
      {/* <Search onChangeSearch={handleSearch} weatherhandler={weatherhandler} /> */}
      <Weather weather={weatherdata} search={search} />
    
      <Forecast forecastApiData={forecastApiData} dailyweather={dailyweather} />
    </div>
  );
}

export default App;
