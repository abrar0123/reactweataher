import moment from "moment";
import React from "react";
import "./weather.scss";
import Card from "../common/UI/Card";
import Container from "../common/UI/Container";
import icon1 from "../../assets/icons/partlysunny.png";

const Weather = (props) => {
  console.log("weatherdata__", props?.weather);

  const sun = moment.unix(props?.weather?.sys?.sunrise);
  const sunset = moment.unix(props?.weather?.sys?.sunset);

  // console.log("moment_", sun);

  const now = moment.unix(props.weather?.dt);
  const time = now.format("hh:mm:ss A");
  const date = now.format("YYYY-MM-DD");
  const sunRise = sun.format("hh:mm:ss A");
  const sunSet = sunset.format("hh:mm:ss A");

  const day = now.format("dddd DD MMM ");
  const empty = "Location";
  return (
    <>
    {/*  */}
      {/* <Card className="weatherdate">
        <div>
          <h3 className="dataeh3">
            {props.search ? props.search.label : empty}
          </h3>
        </div>
        <div>{props.weather && <h3 className="dayeh3">{day}</h3>}</div>
      </Card> */}

      <Container className="mainFlex flex ">
        <Card className="tempCard flexc spaceb">
          <Container className="imgcontainer">
            <img src={icon1} alt="" />
          </Container>
          <Container>
            {props.weather?.main && (
              <h4 className="temph4">{props.weather.main.temp}° C</h4>
            )}
          </Container>

          <Container>
            {props.weather?.weather && (
              <h4 className="temph5">
                {props?.weather?.weather[0]?.description}
              </h4>
            )}
          </Container>
        </Card>

        {/* weatherCard */}

        <Card className="weatherCard flex spacea">
          <Container className="secondCardFlex spacea">
            <div className="flexc">
              {props.weather?.main && <h2> {props.weather.main.temp}° C</h2>}
              <h4>Temp</h4>
            </div>
            <div className="flexc">
              {props.weather?.main && (
                <h2>{props.weather.main.feels_like}° C</h2>
              )}
              <h4>Feels like</h4>
            </div>
          </Container>
          <Container className="secondCardFlex spacea">
            <div className="flexc">
              {props.search && <h2>{props.search?.value?.lat.toFixed(4)}</h2>}
              <h4>Lat</h4>
            </div>
            <div className="flexc">
              {props.search && <h2>{props.search?.value?.long.toFixed(4)}</h2>}
              <h4>Long</h4>
            </div>
          </Container>
          <Container className="secondCardFlex spacea">
            <div className="flexc">
              <h2>{time}</h2>
              <h4>Time</h4>
            </div>
            <div className="flexc">
              <h2> {date}</h2>

              <h4>Date</h4>
            </div>
          </Container>

          <Container className="secondCardFlex spacea">
            <div className="flexc">
              <h2>{sunRise}</h2>
              <h4>sunRise</h4>
            </div>
            <div className="flexc">
              <h2> {sunSet}</h2>

              <h4>sunSet</h4>
            </div>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default Weather;
