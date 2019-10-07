import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
`;

export const Wrapper = styled.div`
  padding: 25px 15px 30px 15px;
  width: 90%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme.fg};
  font-weight: 800;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${Breakpoints.med}) {
    font-size: 28px;
  }
`;

export const ThemeSwitchBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 14px;
    @media (min-width: ${Breakpoints.med}) {
      font-size: 16px;
    }
  }

  .icon {
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
