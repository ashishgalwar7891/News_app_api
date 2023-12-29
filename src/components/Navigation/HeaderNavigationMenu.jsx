import React from "react";
import SearchComponent from "../Search/SearchComponent.jsx";
import "./HeaderNavigationMenu.css";
import Theme from "../Themes/theme.jsx";

const HeaderNavigationMenu = ({ title }) => {
  return (
    <>
      <div className="header-navigation-menu-container p-4 ">
        <header className="header-wrapper">
          <h1 className="title">{title}</h1>
        </header>
        {/* Search button */}
        <div className="search-button-wrapper">
          <SearchComponent />
        </div>
        <nav className="navigation">
          <a href="/" className="link">
            Home
          </a>
        </nav>
        <div className="mx-2">
          <Theme />
        </div>
      </div>
    </>
  );
};

export default HeaderNavigationMenu;
