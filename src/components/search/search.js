import React, { useEffect, useState } from "react";
import "./search.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, options1 } from "./api";

const Search = ({ onChangeSearch, weatherhandler, forecastApiData }) => {
  const [search, setsearch] = useState(null);

  const handleChange = (mySearch) => {
    setsearch(mySearch);
    onChangeSearch(mySearch);
  };

  useEffect(() => {
    weatherhandler();
    forecastApiData();
  }, [search]);

  const loadHandlerOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?namePrefix=${inputValue}`,

        options1
      );

      const result = await response.json();

      const optionsList = result.data.map((city) => ({
        value: { lat: city.latitude, long: city.longitude },
        label: `${city.name},${city.countryCode}`,
      }));
      console.log("optionsList_", optionsList);

      return { options: optionsList }; // Use a different variable name for options
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search">
      <div className="search-paginate">
        <AsyncPaginate
          className="AsyncPaginate"
          debounceTimeout={600}
          placeholder="search city"
          value={search}
          onChange={handleChange}
          loadOptions={loadHandlerOptions}
        />
      </div>
    </div>
  );
};

export default Search;
