import React, { useState, useEffect } from "react";
// import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import styled from "styled-components";
import Loading from "../components/Loading";
import CountryList from "../components/CountryList";
const axios = require("axios");

const CountriesGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const CountriesGridInner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function CountriesHome() {
  const [countries, setCountryData] = useState([]);
  const [loading, setLoadingState] = useState(false);
  const [countryQuery, setCountryQuery] = useState("");
  const [regionSelection, setRegionSelection] = useState("");

  useEffect(() => {
    const getAllCountries = async () => {
      const API_URL = `https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag`;
      setLoadingState(true);
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
