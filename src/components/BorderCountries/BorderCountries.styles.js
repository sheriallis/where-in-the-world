import styled from "styled-components";

import { Link } from "react-router-dom";
import { Breakpoints } from "../../styles/Breakpoints";

export const StyledBorderCountries = styled.div`
  h3 {
    margin-bottom: 30px;
    font-size: 15px;
  }

  @media (min-width: ${Breakpoints.large}) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 40px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  margin: 0 16px 16px 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .icon {
    margin-right: 8px;
  }
`;
