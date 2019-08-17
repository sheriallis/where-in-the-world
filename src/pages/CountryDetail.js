import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import Button from "../components/Button";
import CountryData from "../components/CountryData";
const axios = require("axios");

const CountryDetailSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  height: calc(100vh - 93px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 16px;

  a {
    margin-top: 60px;
  }
`;

export default function CountryDetail({ match }) {
  const [country, setCountryData] = useState({});
  const [error, setError] = useState(false);
  const countryName = match.params.country;

  useEffect(() => {
    getCountryData(countryName);
  }, [countryName]);

  const getCountryData = async countryName => {
    let API_URL;
    const FILTER_PARAMS =
      "?fields=name;flag;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders";

    // Check if countryName is a 2-letter or 3-letter country code
    if (/[A-Z]{2,3}/.test(countryName)) {
      API_URL = `https://restcountries.eu/rest/v2/alpha?codes=${countryName};${FILTER_PARAMS}`;
    } else {
      API_URL = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true${FILTER_PARAMS}`;
    }

    try {
      const res = await axios.get(API_URL);
      const countryData = res.data[0];

      setCountryData(countryData);
    } catch (error) {
      setError(true);
    }
  };

  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;

  return (
    <CountryDetailSection>
      <Wrapper>
        <Link to="/">
          <Button icon={<IoMdArrowBack className="icon" />} text={"Back"} />
        </Link>
        <CountryData
          name={name}
          flag={flag}
          nativeName={nativeName}
          population={population}
          region={region}
          subregion={subregion}
          capital={capital}
          topLevelDomain={topLevelDomain}
          currencies={currencies}
          languages={languages}
          borders={borders}
        />
      </Wrapper>
    </CountryDetailSection>
  );
}
