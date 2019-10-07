import React from "react";

import { StyledRegionFilter, Wrapper } from "./RegionSelect.styles";

export default function RegionSelect({ filterByRegion }) {
  const region = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Wrapper>
      <form>
        <label className="sr-only" htmlFor="region-filter">
          Filter by region:
        </label>

        <StyledRegionFilter
          onChange={filterByRegion}
          id="region-filter"
          name="region-filter"
        >
          <option value="">Filter by Region</option>
          {region.map(region => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </StyledRegionFilter>
      </form>
    </Wrapper>
  );
}
