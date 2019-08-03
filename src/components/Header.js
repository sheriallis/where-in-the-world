import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

function SwitchToDark({ toggleTheme }) {
  return (
    <div className="app-header__mode" onClick={toggleTheme}>
      <FaRegMoon className="app-header__icon" />
      Dark Mode
    </div>
  );
}

function SwitchToLight({ toggleTheme }) {
  return (
    <div className="app-header__mode" onClick={toggleTheme}>
      <FaMoon className="app-header__icon" />
      Light Mode
    </div>
  );
}

function Header({ theme, toggleTheme }) {
  return (
    <header className={`app-header app-header--${theme}`}>
      <div className="app-header__inner">
        <h1 className="app-title">Where in the world?</h1>
        {theme === "light" ? (
          <SwitchToDark toggleTheme={toggleTheme} />
        ) : (
          <SwitchToLight toggleTheme={toggleTheme} />
        )}
      </div>
    </header>
  );
}

export default Header;
