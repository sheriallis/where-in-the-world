import styled from "styled-components";

import { Breakpoints } from "../../styles/Breakpoints";

export const StyledBorderCountries = styled.div`
  h3 {
    margin-bottom: 30px;
    font-size: 15px;
  }

  a {
    margin-right: 16px;
  }
  @media (min-width: ${Breakpoints.large}) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }
`;
