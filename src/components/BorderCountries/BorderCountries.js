import React from "react";

import "./BorderCountries.styles";
import { StyledBorderCountries, StyledLink } from "./BorderCountries.styles";

export default function BorderCountries({ borders }) {
  return (
    <StyledBorderCountries>
      <h3>Border Countries: </h3>
      {borders
        .filter((country, index) => {
          return index < 4;
        })
        .map(country => (
          <StyledLink key={country} to={`/country/${country}`}>
            {country}
          </StyledLink>
        ))}
    </StyledBorderCountries>
  );
}
