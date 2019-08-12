import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../styles/Breakpoints";

const StyledRegionFilter = styled.select`
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  padding: 15px 40px 15px 25px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 8px;
  appearance: button;
  width: 100%;
  @media (min-width: 817px) {
    width: auto;
  }
`;

const Wrapper = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    border-style: solid;
    border-color: ${props => props.theme.fg};
    border-width: 2px 2px 0 0;
    display: inline-block;
    height: 6px;
    right: 16px;
    top: 19px;
    transform: rotate(135deg);
    vertical-align: top;
    width: 0.45em;
    @media (min-width: ${Breakpoints.med}) {
      top: 25%;
    }
  }
`;

export default function RegionSelect({ filterByRegion }) {
  const region = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Wrapper>
      <form>
        <label className="sr-only" htmlFor="region-filter">
          Filter by region:
        </label>

        <StyledRegionFilter onChange={filterByRegion}>
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
