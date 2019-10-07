import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "../../index.css";
import { IoMdArrowBack } from "react-icons/io";
import Button from "../../components/Button/Button";
import CountryData from "../../components/CountryData/CountryData";
import Loading from "../../components/Loading/Loading";
import { NotFound } from "../Error/Error";

import { CountryDetailSection, Wrapper } from "./CountryDetail.styles";

const axios = require("axios");

function CountryDetail({ match, history }) {
  let API_URL;
  const FILTER_PARAMS =
    "?fields=name;flag;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders";

  const [country, setCountryData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoadingState] = useState(false);
  const countryName = match.params.country;

  // Check if countryName is a 2-letter or 3-letter country code
  if (/^[A-Z]{2,3}/.test(countryName)) {
    API_URL = `https://restcountries.eu/rest/v2/alpha?codes=${countryName};${FILTER_PARAMS}`;
  } else {
    API_URL = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true${FILTER_PARAMS}`;
  }

  useEffect(() => {
    const getCountryData = async () => {
      setLoadingState(true);

      try {
        const res = await axios.get(API_URL);
        if (res.status === "400") {
          throw new Error();
        }
        setCountryData(res.data[0]);
        setLoadingState(false);
      } catch (error) {
        setError(true);
        setLoadingState(false);
      }
    };

    getCountryData();
  }, [API_URL]);

  return (
    <CountryDetailSection>
      <Wrapper>
        <div>
          <Button
            icon={<IoMdArrowBack className="icon" />}
            text={"Back"}
            onClick={() => history.goBack()}
          />
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          error && <NotFound text={"Country not found"} />
        ) : (
          country && <CountryData country={country} />
        )}
      </Wrapper>
    </CountryDetailSection>
  );
}

export default withRouter(CountryDetail);
