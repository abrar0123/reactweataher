import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Weather from "./components/weather/weather";
import { APIkey, weatherEndPoints } from "./components/search/api";
import Forecast from "./components/forecast/forecast";

function App() {
  const token = "token786";
  const token2 = "tokn2786";

  const storedSearch = localStorage.getItem(token);
  const parsedSearch = storedSearch !== "undefined" && JSON.parse(storedSearch);

  const forcastStored = localStorage.getItem(token2);
  const forecastpersist =
    forcastStored !== "undefined" && JSON.parse(forcastStored);

  console.log("storedSearch___2:", parsedSearch);
  const [weatherdata, setweather] = useState(parsedSearch);
  const [dailyweather, setdailyweather] = useState(forecastpersist);
  const [search, setsearch] = useState();
  const [state, setstate] = useState();

  const handleSearch = (mySearch) => {
    setsearch(mySearch);
    setstate({ lat: mySearch.value.lat, lon: mySearch.value.long });
  };

  const weatherApiData = async () => {
    try {
      const response = await fetch(
        `${weatherEndPoints}/weather?lat=${state.lat}&lon=${state.lon}&appid=${APIkey}&units=metric`
      );
      const result = await response.json();
      localStorage.setItem(token, JSON.stringify(result));

      setweather(result);
    } catch (error) {
      console.error("result_error", error);
    }
  };

  // useEffect(() => {
  // }, [search]);

  // Retrieve the stored search value

  const forecastApiData = async () => {
    try {
      const response = await fetch(
        `${weatherEndPoints}/forecast?lat=${state.lat}&lon=${state.lon}&appid=${APIkey}&units=metric`
      );
      const result = await response.json();
      localStorage.setItem(token2, JSON.stringify(result));
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
