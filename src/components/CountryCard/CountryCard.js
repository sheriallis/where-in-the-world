import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { forceCheck } from "react-lazyload";

import {
  Card,
  CardImg,
  CardTitle,
  CardInfoList,
  CardInfoItem,
  CardInfoWrapper
} from "./CountryCard.styles";

function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
  countryQuery
}) {
  useEffect(() => {
    /* manually trigger checking for elements in viewport bacause the LazyLoad components enter the viewport without resize or scroll events when a search query is entered */
    if (countryQuery.length > 0) {
      forceCheck();
    }
  });

  return (
    <Link to={`/country/${name}`}>
      <Card>
        <LazyLoad height={160} offset={100} once>
          <CardImg src={flag} alt={`flag for ${name}`} />
        </LazyLoad>
        <CardInfoWrapper>
          <CardTitle>{name}</CardTitle>
          <CardInfoList>
            <CardInfoItem>
              <span>Population:</span> {population.toLocaleString()}
            </CardInfoItem>
            <CardInfoItem>
              <span>Region:</span> {region}
            </CardInfoItem>
            <CardInfoItem>
              <span>Capital:</span> {capital}
            </CardInfoItem>
          </CardInfoList>
        </CardInfoWrapper>
      </Card>
    </Link>
  );
}

export default CountryCard;
