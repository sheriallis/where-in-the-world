import styled from "styled-components";

import { sharedButtonStyles } from "../Button/Button.styles";
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
  ${sharedButtonStyles}
  font-weight: 600;
  margin: 0 16px 16px 0;

  &:hover {
    background-color: ${props => props.theme.hoverBg};
    color: ${props => props.theme.hoverFg};
    cursor: pointer;
  }

  .icon {
    margin-right: 8px;
  }
`;
