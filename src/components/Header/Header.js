import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AppHeader, Wrapper, Title, ThemeSwitchBtn } from "./Header.styles";

function ThemeSwitcher({ lightTheme, toggleTheme }) {
  return (
    <ThemeSwitchBtn onClick={toggleTheme}>
      {lightTheme ? (
        <FaRegMoon className="icon" />
      ) : (
        <FaMoon className="icon" />
      )}
      <p>{lightTheme ? "Dark Mode" : "Light Mode"}</p>
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
