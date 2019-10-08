import React from "react";
import { Link } from "react-router-dom";

import "./BorderCountries.styles";
import Button from "../Button/Button";
import { StyledBorderCountries } from "./BorderCountries.styles";

export default function BorderCountries({ borders }) {
  return (
    <StyledBorderCountries>
      <h3>Border Countries: </h3>
      {borders
        .filter((country, index) => {
          return index < 4;
        })
        .map(country => (
          <Link key={country} to={`/country/${country}`}>
            <Button text={country} />
          </Link>
        ))}
    </StyledBorderCountries>
  );
}
