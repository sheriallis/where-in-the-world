import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import RegionSelect from "../RegionSelect/RegionSelect";

import { SearchArea } from "./Search.styles";

export default function Search({
  filterCountries,
  filterByRegion,
  handleSubmit
}) {
  return (
    <SearchArea>
      <SearchInput
        filterCountries={filterCountries}
        handleSubmit={handleSubmit}
      />
      <RegionSelect filterByRegion={filterByRegion} />
    </SearchArea>
  );
}
