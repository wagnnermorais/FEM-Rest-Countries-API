import "../styles/Header.css";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <Link to={"/"} className="no-style-link">
          <h2>Where in the world?</h2>
        </Link>
        <DarkMode
          text={"Dark Mode"}
          onClick={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;
