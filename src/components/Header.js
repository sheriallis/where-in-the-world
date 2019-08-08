import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
`;

const Wrapper = styled.div`
  padding: 25px 15px 30px 15px;
  width: 90%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.fg};
  font-weight: 800;
`;

const ThemeSwitchBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

function ThemeSwitcher({ lightTheme, toggleTheme }) {
  return (
    <ThemeSwitchBtn onClick={toggleTheme}>
      {lightTheme ? (
        <FaRegMoon className="icon" />
      ) : (
        <FaMoon className="icon" />
      )}
      {lightTheme ? "Dark Mode" : "Light Mode"}
    </ThemeSwitchBtn>
  );
}

function Header({ lightTheme, toggleTheme }) {
  return (
    <AppHeader>
      <Wrapper>
        <Link to="/">
          <Title>Where in the world?</Title>
        </Link>
        <ThemeSwitcher lightTheme={lightTheme} toggleTheme={toggleTheme} />
      </Wrapper>
    </AppHeader>
  );
}

export default Header;
