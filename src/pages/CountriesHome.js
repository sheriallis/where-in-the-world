import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import styled from "styled-components";
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
  const [countryQuery, setCountryQuery] = useState("");
  const [regionSelection, setRegionSelection] = useState("");

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(res => {
      const countries = res.data;
      setCountryData(countries);
    });
  };

  const filterData = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    setCountryQuery(query);
  };

  const filterByRegion = e => {
    const query = e.currentTarget.value;
    setRegionSelection(query);
  };

  return (
    <React.Fragment>
      <Search filterData={filterData} filterByRegion={filterByRegion} />
      <CountriesGrid>
        <CountriesGridInner>
          {countries &&
            countries
              .filter(country =>
                country.name.toLowerCase().includes(countryQuery.toLowerCase())
              )
              .filter(country =>
                country.region
                  .toLowerCase()
                  .includes(regionSelection.toLocaleLowerCase())
              )
              .map(country => (
                <CountryCard
                  name={country.name}
                  key={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flag}
                />
              ))}
        </CountriesGridInner>
      </CountriesGrid>
    </React.Fragment>
  );
}
