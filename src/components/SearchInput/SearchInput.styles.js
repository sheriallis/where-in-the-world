import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

export const StyledInput = styled.input`
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 15px 40px 15px 25px;
  padding-left: 40px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 30px;

  &::placeholder {
    color: ${props => props.theme.fg};
  }
  @media (min-width: ${Breakpoints.med}) {
    width: auto;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .search-icon {
    position: absolute;
    top: 18%;
    left: 16px;
  }
`;
