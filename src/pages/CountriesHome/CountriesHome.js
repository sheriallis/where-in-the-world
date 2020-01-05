import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import Loading from "../../components/Loading/Loading";
import CountryList from "../../components/CountryList/CountryList";

import { CountriesGrid, CountriesGridInner } from "./CountriesHome.styles";

const axios = require("axios");

export default function CountriesHome() {
  const [countries, setCountryData] = useState([]);
  const [loading, setLoadingState] = useState(true);
  const [countryQuery, setCountryQuery] = useState("");
  const [regionSelection, setRegionSelection] = useState("");

  useEffect(() => {
    const getAllCountries = async () => {
      const API_URL = `https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code`;
      const res = await axios.get(API_URL);
      setCountryData(res.data);
      setLoadingState(false);
    };
    getAllCountries();
  }, []);

  const filterCountries = e => {
    setCountryQuery(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCountryQuery(e.target.elements.search.value);
  };

  const filterByRegion = e => {
    const query = e.currentTarget.value;
    setRegionSelection(query);
  };

  return (
    <React.Fragment>
      <Search
        filterCountries={filterCountries}
        filterByRegion={filterByRegion}
        handleSubmit={handleSubmit}
      />
      <CountriesGrid>
        <CountriesGridInner>
          {loading === true ? (
            <Loading />
          ) : (
            <CountryList
              countries={countries}
              countryQuery={countryQuery}
              regionSelection={regionSelection}
            />
          )}
        </CountriesGridInner>
      </CountriesGrid>
    </React.Fragment>
  );
}
