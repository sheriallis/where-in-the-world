import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import RegionSelect from "./RegionSelect";

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 817px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 30px auto;
  }
`;

export default function Search({ filterData, filterByRegion }) {
  return (
    <SearchArea>
      <SearchInput filterData={filterData} />
      <RegionSelect filterByRegion={filterByRegion} />
    </SearchArea>
  );
}
