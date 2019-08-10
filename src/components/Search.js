import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import RegionFilter from "./RegionFilter";

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

export default function Search() {
  return (
    <SearchArea>
      <SearchInput />
      <RegionFilter />
    </SearchArea>
  );
}
