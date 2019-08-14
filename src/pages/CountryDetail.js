import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import Button from "../components/Button";
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

const CountryFlag = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const CountryTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 24px;
  @media (min-width: 1440px) {
    grid-column: 1 / 3;
  }
`;

const CountryInfo = styled.div`
  @media (min-width: 1440px) {
    display: grid;
    grid-template-rows: 60px 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 60px;
    margin-left: 60px;
  }
`;

const CountryInfoList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  span {
    font-weight: 600;
  }
  @media (min-width: 1440px) {
    margin-right: 90px;
  }
`;

const BorderCountries = styled.div`
  h3 {
    margin-bottom: 30px;
    font-size: 15px;
  }

  a {
    margin-right: 16px;
  }
  @media (min-width: 1440px) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }
`;

const CountryData = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function CountryDetail({ match }) {
  const [country, setCountryData] = useState({});
  const countryName = match.params.country;

  useEffect(() => {
    getCountryData(countryName);
  }, [countryName]);

  const getCountryData = async countryName => {
    const API_URL = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true?fields=name;flag;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`;

    const res = await axios.get(API_URL);
    const countryData = res.data[0];

    setCountryData(countryData);
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
        <CountryData>
          <CountryFlag src={flag} alt={`flag for ${name}`} />
          <CountryInfo>
            <CountryTitle>{name}</CountryTitle>
            <CountryInfoList>
              <li>
                <span>Native name: </span> {nativeName}
              </li>
              <li>
                <span>Population: </span>
                {population && population.toLocaleString()}
              </li>
              <li>
                <span>Region: </span> {region}
              </li>
              <li>
                <span>Sub region: </span> {subregion}
              </li>
              <li>
                <span>Capital: </span> {capital}
              </li>
            </CountryInfoList>
            <CountryInfoList>
              <li>
                <span>Top level domain: </span> {topLevelDomain}
              </li>
              <li>
                <span>Currencies: </span>
                {currencies &&
                  currencies.map(currency => currency.name).join(", ")}
              </li>
              <li>
                <span>Languages: </span>
                {languages &&
                  languages.map(language => language.name).join(", ")}
              </li>
            </CountryInfoList>
            <BorderCountries>
              <h3>Border Countries: </h3>
              {borders &&
                borders.splice(0, 3).map(country => <Button text={country} />)}
            </BorderCountries>
          </CountryInfo>
        </CountryData>
      </Wrapper>
    </CountryDetailSection>
  );
}
